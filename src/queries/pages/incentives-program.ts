export async function incentivesPageQuery() {
  const siteIncentivesPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        page(id: "/incentives-program", idType: URI) {
          seo {
            metaDesc
            title
            twitterDescription
            twitterTitle
            twitterImage {
              sourceUrl
            }
          }
          incentives {
            header {
              image {
                altText
                sourceUrl
              }
              heading
            }
            contentBlock {
              body
              heading
              incentiveAmount
              image {
                altText
                sourceUrl
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
  const { data } = await siteIncentivesPageQueryRes.json();
  return data;
}
