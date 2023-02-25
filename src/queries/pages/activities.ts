export async function activitiesPageQuery() {
  const siteActivitiesPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        page(id: "/4-season-playground", idType: URI) {
          seo {
            metaDesc
            title
            twitterDescription
            twitterTitle
            twitterImage {
              sourceUrl
            }
          }
          activities {
            header {
              heading
              image {
                altText
                sourceUrl
              }
            }
            main {
              body
              heading
              buttons {
                buttonLink
                buttonText
                blank
                fieldGroupName
              }
            }
          }
          optinform {
            optin {
              body
              fileDownload {
                mediaItemUrl
              }
              heading
              image {
                altText
                sourceUrl
              }
            }
          }
        }
        activities {
          nodes {
            title
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
                          `,
    }),
  });
  const { data } = await siteActivitiesPageQueryRes.json();
  return data;
}
