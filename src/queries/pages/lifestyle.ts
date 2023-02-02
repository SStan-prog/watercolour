export async function lifestylePageQuery() {
  const siteLifestylePageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        page(id: "/lifestyle", idType: URI) {
          seo {
            metaDesc
            title
            twitterDescription
            twitterTitle
            twitterImage {
              sourceUrl
            }
          }
          lifestyle {
            header {
              backgroundImage {
                altText
                sourceUrl
              }
              heading
              subheading
            }
            contentRow {
              heading
              main
              buttons {
                buttonLink
                buttonText
              }
            }
            finalCta {
              buttonLink
              buttonText
              heading
              subheading
            }
            cards {
              card {
                body
                image {
                  altText
                  sourceUrl
                }
                heading
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
  const { data } = await siteLifestylePageQueryRes.json();
  return data;
}
