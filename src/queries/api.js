export async function navQuery() {
  const siteNavQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
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
                            childItems {
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
    method: "post",
    headers: { "Content-Type": "application/json" },
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
                childItems {
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
  const { data } = await siteFooterQueryRes.json();
  return data;
}

export async function blogPageQuery() {
  const siteBlogPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
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
      }
      posts {
        nodes {
          date
          uri
          title
          excerpt
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
              altText
            }
          }
          author {
            node {
              name
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

export async function faqPageQuery() {
  const siteFaqPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        page(id: "/faq", idType: URI) {
          faq {
            main {
              body
              heading
            }
            header {
              heading
              image {
                sourceUrl
              }
            }
          }
        }
      }
            `,
    }),
  });
  const { data } = await siteFaqPageQueryRes.json();
  return data;
}

export async function resourcesPageQuery() {
  const siteResourcesPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        page(id: "/resources", idType: URI) {
          resources {
            header {
              heading
              image {
                sourceUrl
              }
            }
            main {
              heading
              listLeft
              listRight
              body
            }
          }
        }
      }
            `,
    }),
  });
  const { data } = await siteResourcesPageQueryRes.json();
  return data;
}

export async function privacyPolicyPageQuery() {
  const sitePrivacyPolicyPageQueryRes = await fetch(
    import.meta.env.WP_API_URL,
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
        page(id: "/privacy-policy", idType: URI) {
          content
          title
        }
      }
            `,
      }),
    }
  );
  const { data } = await sitePrivacyPolicyPageQueryRes.json();
  return data;
}

export async function getNodeByURI(uri) {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
                nodeByUri(uri: $uri) {
                  __typename
                  isContentNode
                  isTermNode
                  ... on Post {
                    id
                    title
                    author{
                      node{
                        name
                      }
                    }
                    date
                    uri
                    excerpt
                    content
                    categories {
                      nodes {
                        name
                        uri
                      }
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
    method: "post",
    headers: { "Content-Type": "application/json" },
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
