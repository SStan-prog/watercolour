export async function bungalowTownTrisQuery() {
  const siteBungalowTownTrisQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
          mrHome(where: {categoryName: "bungalow-town-tri"}) {
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
                    modelLink
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
  const { data } = await siteBungalowTownTrisQueryRes.json();
  return data;
}
