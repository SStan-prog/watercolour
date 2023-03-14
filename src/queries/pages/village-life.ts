export async function villageLifePageQuery() {
  const siteVillageLifePageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/village-life", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              villagelife {
                header {
                  heading
                  subheading
                  image {
                    altText
                    sourceUrl
                  }
                }
                cta {
                    body
                    buttonLink
                    buttonText
                    heading
                    image {
                      altText
                      sourceUrl
                    }
                  }
                  main {
                    body
                    heading
                  }
                
              }
            }
            villageServices (where: {orderby: {field: DATE, order: ASC}}) {
                nodes {
                  slug
                  title
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
  const { data } = await siteVillageLifePageQueryRes.json();
  return data;
}
