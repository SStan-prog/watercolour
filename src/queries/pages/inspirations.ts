export async function inspirationsPageQuery() {
  const siteInspirationsPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        page(id: "/inspirations", idType: URI) {
          seo {
            metaDesc
            title
            twitterDescription
            twitterTitle
            twitterImage {
              sourceUrl
            }
          }
          inspirations {
            header {
              heading
              body
            }
            section {
              heading
              communities {
                link
                location
                name
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
  const { data } = await siteInspirationsPageQueryRes.json();
  return data;
}
