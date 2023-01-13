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
      }
              `,
    }),
  });
  const { data } = await siteResourcesPageQueryRes.json();
  return data;
}
