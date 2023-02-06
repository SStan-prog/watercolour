export async function modelsPageQuery() {
  const siteModelsPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/models", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              models_page {
                contentRow {
                  body
                  buttons {
                    buttonLink
                    buttonText
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
                header {
                  heading
                  subheading
                  image {
                    altText
                    sourceUrl
                  }
                }
                mortgagePartner {
                  buttonLink
                  buttonText
                  image {
                    altText
                    sourceUrl
                  }
                }
                purchaseSteps {
                  heading
                  steps {
                    heading
                    icon {
                      altText
                      sourceUrl
                    }
                    list
                  }
                }
                sitemap {
                  heading
                  iframeUrl
                }
                standardFeatures {
                  buttonLink
                  buttonText
                  heading
                  features {
                    name
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                virtualTours {
                  heading
                  models {
                    image {
                      altText
                      sourceUrl
                    }
                    name
                    videoTourLink
                    virtualTourLink
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
  const { data } = await siteModelsPageQueryRes.json();
  return data;
}
