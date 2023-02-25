export async function getModelNodeByURI(uri) {
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

export async function getAllModelSlugs() {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetAllModelSlugs{
        models(first: 100) {
          nodes {
            slug
            models {
              modelDetails {
                bathrooms
                beds
                features {
                  feature
                }
                brochure {
                  mediaItemUrl
                }
                garage
                lotArea
                name
                price
                squareFootage
                virtualTourLink
                sliderImages {
                  altText
                  sourceUrl
                }
              }
              loftedOption
              loftedModelDetails {
                bathrooms
                beds
                brochure {
                  mediaItemUrl
                }
                features {
                  feature
                }
                garage
                lotArea
                name
                squareFootage
                virtualTourLink
                price
                sliderImages {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
        themeGeneralSettings {
          footerGallery {
            gallery {
              sourceUrl
              altText
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
