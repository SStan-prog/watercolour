export async function partnersPageQuery() {
  const sitePartnersPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/partners", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              partners {
                header {
                  heading
                  body
                }
                main {
                  partner {
                    body
                    heading
                    link
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
  const { data } = await sitePartnersPageQueryRes.json();
  return data;
}
