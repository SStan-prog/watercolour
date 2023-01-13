export async function faqPageQuery() {
  const siteFaqPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
          page(id: "/faq", idType: URI) {
            faq {
              main {
                body
                heading
              }
              header {
                heading
                image {
                  sourceUrl
                }
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
  const { data } = await siteFaqPageQueryRes.json();
  return data;
}
