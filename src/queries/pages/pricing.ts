export async function pricingPageQuery() {
  const sitePricingPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/pricing", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              pricing {
                header {
                  date
                  heading
                  pricingBreakdown {
                    link
                    text
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
                disclaimer
              }
            }
            bungalows: models(where: {categoryName: "bungalow", orderby: {field: DATE, order: ASC}}) {
              nodes {
                title
                models {
                  modelDetails {
                    bathrooms
                    beds
                    garage
                    lotArea
                    name
                    price
                    squareFootage
                  }
                  loftedOption
                  loftedModelDetails {
                    bathrooms
                    beds
                    garage
                    lotArea
                    name
                    price
                    squareFootage
                  }
                }
              }
            }
            twoStoreys: models(where: {categoryName: "two storey", orderby: {field: DATE, order: ASC}}) {
              nodes {
                title
                models {
                  modelDetails {
                    bathrooms
                    beds
                    garage
                    lotArea
                    name
                    price
                    squareFootage
                  }
                  loftedOption
                  loftedModelDetails {
                    bathrooms
                    beds
                    garage
                    lotArea
                    name
                    price
                    squareFootage
                  }
                }
              }
            }
            
            bungalowTownTris: models(where: {categoryName: "bungalow-town-tri", orderby: {field: DATE, order: ASC}}) {
              nodes {
                title
                models {
                  modelDetails {
                    bathrooms
                    beds
                    garage
                    lotArea
                    name
                    price
                    squareFootage
                  }
                  loftedOption
                  loftedModelDetails {
                    bathrooms
                    beds
                    garage
                    lotArea
                    name
                    price
                    squareFootage
                  }
                }
              }
            }

            bungalowTownSemis: models(where: {categoryName: "bungalow-town-semi", orderby: {field: DATE, order: ASC}}) {
              nodes {
                title
                models {
                  modelDetails {
                    bathrooms
                    beds
                    garage
                    lotArea
                    name
                    price
                    squareFootage
                  }
                  loftedOption
                  loftedModelDetails {
                    bathrooms
                    beds
                    garage
                    lotArea
                    name
                    price
                    squareFootage
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
  const { data } = await sitePricingPageQueryRes.json();
  return data;
}
