export async function homePageQuery() {
  const siteHomePageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
            page(id: "/", idType: URI) {
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
  const { data } = await siteHomePageQueryRes.json();
  return data;
}
