export async function bungalowTownSemiQuery() {
  const siteBungalowTownSemiQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
                    models(where: {categoryName: "bungalow-town-semi", orderby: {field: DATE, order: ASC}}) {
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
  const { data } = await siteBungalowTownSemiQueryRes.json();
  return data;
}
