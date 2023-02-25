export async function navQuery() {
  const siteNavQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
                menus(where: {location: PRIMARY}) {
                  nodes {
                    name
                    menuItems (first: 50){
                        nodes {
                            uri
                            url
                            order
                            label
                            childItems (first: 50){
                                edges {
                                  node {
                                    id
                                    uri
                                    label
                                  }
                                }
                              }
                        }
                    }
                  }
                }
            }
            `,
    }),
  });
  const { data } = await siteNavQueryRes.json();
  return data;
}

export async function footerQuery() {
  const siteFooterQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        menus(where: {location: FOOTER}) {
          nodes {
            name
            menuItems(first: 50) {
              nodes {
                uri
                url
                order
                label
                childItems (first: 50){
                  edges {
                    node {
                      id
                      uri
                      label
                    }
                  }
                }
              }
            }
          }
        }
        themeGeneralSettings {
          footerforms {
            contactForm {
              body
              disclaimer
              heading
            }
            salesForm {
              body
              heading
            }
            socialMedia {
              facebookLink
              fieldGroupName
              heading
              instagramLink
              youtubeLink
            }
          }
        }
      }
            `,
    }),
  });
  const { data } = await siteFooterQueryRes.json();
  return data;
}

export async function blogPageQuery() {
  const siteBlogPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        page(id: "/blog", idType: URI) {
         blogHeader {
          heading
          image {
            altText
            sourceUrl
          }
        }
        seo {
          metaDesc
          title
          twitterDescription
          twitterTitle
          twitterImage {
            sourceUrl
            }
          }
      }
      posts {
        nodes {
          date
          uri
          title
          excerpt
          featuredImage {
            node {
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
            `,
    }),
  });
  const { data } = await siteBlogPageQueryRes.json();
  return data;
}

export async function getNodeByURI(uri) {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
                nodeByUri(uri: $uri) {
                  __typename
                  isContentNode
                  isTermNode
                  ... on Model {
                    id
                    title
                    seo {
                      metaDesc
                      title
                    }
                  }
                  ... on Post {
                    id
                    title
                    date
                    uri
                    excerpt
                    content
                    seo {
                      metaDesc
                      title
                    }
                    featuredImage {
                      node {
                        mediaItemUrl
                        altText
                      }
                    }
                  } 
                } 
              }
            `,
      variables: {
        uri: uri,
      },
    }),
  });
  const { data } = await response.json();
  return data;
}

export async function getAllUris() {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetAllUris {
            terms {
              nodes {
                uri
              }
            }
            posts(first: 100) {
              nodes {
                uri
              }
            }
          models(first: 100) {
              nodes {
                uri
              }
            }
          }
          `,
    }),
  });

  const { data } = await response.json();
  const uris = Object.values(data)
    .reduce(function (acc, currentValue) {
      return acc.concat(currentValue.nodes);
    }, [])
    .map((node) => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
      return {
        params: {
          uri: trimmedURI,
        },
      };
    });

  return uris;
}
