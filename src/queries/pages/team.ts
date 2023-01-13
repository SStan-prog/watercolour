export async function teamPageQuery() {
  const siteTeamPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/team", idType: URI) {
              team {
                header {
                  heading
                  image {
                    sourceUrl
                  }
                }
                main {
                  teamMember {
                    email
                    name
                    phoneNumber
                    position
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
  const { data } = await siteTeamPageQueryRes.json();
  return data;
}
