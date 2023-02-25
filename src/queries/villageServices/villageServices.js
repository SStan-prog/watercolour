export async function getVillageServiceyNodeByURI(uri) {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
                      nodeByUri(uri: $uri) {
                        __typename
                        isContentNode
                        isTermNode
                        ... on VillageService {
                          id
                          title
                          seo {
                              metaDesc
                              title
                              twitterDescription
                              twitterTitle
                              twitterImage {
                                sourceUrl
                              }
                            }
                          uri
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

export async function getAllVillageServicesSlugs() {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetAllVillageServicesSlugs{
          villageServices(first: 100) {
            nodes {
              slug
              seo {
                  metaDesc
                  title
                  twitterDescription
                  twitterTitle
                  twitterImage {
                    sourceUrl
                  }
                }
             villageService {
                customContent {
                  body
                  heading
                  image {
                    altText
                    sourceUrl
                  }
                }
                directory {
                  heading
                  links {
                    link
                    title
                  }
                }
                header {
                  body
                  heading
                  images {
                    altText
                    sourceUrl
                  }
                }
                favourites {
                  text
                  images {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
        }
                `,
    }),
  });

  const { data } = await response.json();
  return data;
}
