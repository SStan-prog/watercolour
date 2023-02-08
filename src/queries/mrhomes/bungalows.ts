export async function bungalowsQuery() {
  const siteBungalowsQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        mrHome(where: {categoryName: "bungalow"}) {
          edges {
            node {
              id
              title
              mrHomes {
                modelDetails {
                  address
                  bathrooms
                  beds
                  brochureLink {
                    mediaItemUrl
                  }
                  garage
                  lot
                  lotArea
                  moveInDate
                  name
                  price
                  squareFootage
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
              tags {
                nodes {
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
  const { data } = await siteBungalowsQueryRes.json();
  return data;
}
