export async function pressPageQuery() {
  const sitePressPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/press", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              press {
                header {
                  pressInquiries {
                    body
                    heading
                    image {
                      altText
                      sourceUrl
                    }
                  }
                  pressKit {
                    body
                    buttonLink
                    buttonText
                    heading
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                mediaMentions {
                  heading
                  mediaMentions {
                    articleName
                    date
                    articleLink
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                videos {
                  videos {
                    videoEmbedLink
                  }
                  heading
                }
              }
            }
            themeGeneralSettings {
              footerGallery {
                gallery {
                  sourceUrl
                  altText
                }
              }
            }
          }
                    `,
    }),
  });
  const { data } = await sitePressPageQueryRes.json();
  return data;
}
