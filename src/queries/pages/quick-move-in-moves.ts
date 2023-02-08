export async function quickMoveInHomesPageQuery() {
  const siteQuickMoveInHomesPageQueryRes = await fetch(
    import.meta.env.WP_API_URL,
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
            page(id: "/quick-move-in-homes", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              quick_move_in_homes {
                header {
                  image {
                    altText
                    sourceUrl
                  }
                  body
                  buttonLink
                  buttonText
                  heading

                }
                homeBuyersJourney {
                  heading
                  steps {
                    body
                    heading
                    icon {
                      altText
                      sourceUrl
                    }
                  }
                }
                sitePlan {
                  heading
                  iframeurl
                }
              }
            }
          }
                `,
      }),
    }
  );
  const { data } = await siteQuickMoveInHomesPageQueryRes.json();
  return data;
}
