export async function bungalowTownTriQuery() {
  const siteBungalowTownTriQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
                  models(where: {categoryName: "bungalow-town-tri", orderby: {field: DATE, order: ASC}}) {
                    edges {
                      node {
                        id
                        title
                        models {
                          loftedOption
                          modelDetails {
                            bathrooms
                            beds
                            price
                            name
                            squareFootage
                            lotArea
                          }
                        }
                        featuredImage {
                          node {
                            altText
                            sourceUrl
                          }
                        }
                        slug
                      }
                    }
                  }
                }
                              `,
    }),
  });
  const { data } = await siteBungalowTownTriQueryRes.json();
  return data;
}
