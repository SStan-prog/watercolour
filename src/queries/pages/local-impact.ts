export async function localImpactPageQuery() {
  const siteLocalImpactPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/local-impact", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              localimpact {
                header {
                  body
                  heading
                }
                impactPoints {
                  body
                  heading
                  icon {
                    altText
                    sourceUrl
                  }
                }
                footerImage {
                  altText
                  sourceUrl
                }
              }
            }
          }
                    `,
    }),
  });
  const { data } = await siteLocalImpactPageQueryRes.json();
  return data;
}
