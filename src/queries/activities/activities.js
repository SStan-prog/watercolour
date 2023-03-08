export async function getActivityNodeByURI(uri) {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
                    nodeByUri(uri: $uri) {
                      __typename
                      isContentNode
                      isTermNode
                      ... on Activity {
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

export async function getAllActivitySlugs() {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetAllActivitySlugs{
        activities(first: 100) {
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
            activity {
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
            optinform {
              optin {
                body
                formName
                fileDownload {
                  mediaItemUrl
                }
                heading
                image {
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
