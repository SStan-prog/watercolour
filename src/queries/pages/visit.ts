export async function visitPageQuery() {
  const siteVisitPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/visit", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              visit {
                header {
                  address
                  contactInfo
                  heading
                  image {
                    altText
                    sourceUrl
                  }
                }
                accommodations {
                  heading
                  optionalBooking
                  place {
                    name
                    buttonLink
                    buttonText
                    description
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                visit {
                  aside
                  buttonLink
                  buttonText
                  details
                  heading
                  subheading
                }
              }
            }
          }
                  `,
    }),
  });
  const { data } = await siteVisitPageQueryRes.json();
  return data;
}
