export async function locationPageQuery() {
  const siteLocationPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/location", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              location {
                map {
                  heading
                  body
                  image {
                    altText
                    sourceUrl
                  }
                }
                header {
                  heading
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
  const { data } = await siteLocationPageQueryRes.json();
  return data;
}
