export async function soldHomesQuery() {
  const soldHomesQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            mrHome(first: 100, where: {tag: "sold"}) {
              edges {
                node {
                  id
                  title
                  mrHomes {
                    modelDetails {
                      image {
                        altText
                        sourceUrl
                      }
                      basement
                      lot
                      address
                      name
                    }
                  }
                }
              }
            }
          }
                            `,
    }),
  });
  const { data } = await soldHomesQueryRes.json();
  return data;
}
