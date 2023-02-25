export async function aboutTheBuilderPageQuery() {
  const siteAboutTheBuilderPageQueryRes = await fetch(
    import.meta.env.WP_API_URL,
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
            page(id: "/about-land-ark", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              aboutthebuilder {
                achievements {
                  achievements {
                    name
                    image {
                      altText
                      sourceUrl
                    }
                  }
                  heading
                }
                header {
                  rowone {
                    body
                    heading
                    image {
                      altText
                      sourceUrl
                    }
                  }
                  rowtwo {
                    body
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                previousCommunities {
                  body
                  buttonLink
                  buttonText
                  heading
                  mapIframeLink
                  image {
                    altText
                    sourceUrl
                  }
                }
                sustainability {
                  heading
                  images {
                    image {
                      altText
                      sourceUrl
                    }
                  }
                  subheading
                  backgroundImage {
                    sourceUrl
                  }
                }
              }
            }
          }
                        `,
      }),
    }
  );
  const { data } = await siteAboutTheBuilderPageQueryRes.json();
  return data;
}
