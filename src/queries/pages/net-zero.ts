export async function netZeroPageQuery() {
  const siteNetZeroPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            page(id: "/net-zero", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              netzero {
                header {
                  heading
                  subheading
                  image {
                    altText
                    sourceUrl
                  }
                }
                contentRow1 {
                  topRow {
                    body
                    heading
                    image {
                      altText
                      sourceUrl
                    }
                    logo {
                      altText
                      sourceUrl
                    }
                  }
                }
                videos {
                  heading
                  videoLinks {
                    videoEmbedLink
                  }
                }
                ctaForm {
                  body
                  heading
                  image {
                    altText
                    sourceUrl
                  }
                }
                testimonials {
                  heading
                  testimonials {
                    body
                    company
                    name
                    headshot {
                      altText
                      sourceUrl
                    }
                  }
                }
                resources {
                  heading
                  resources {
                    link
                    videoEmbedLink
                    heading
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                technologies {
                  heading
                  technologies {
                    description
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                contentRow2 {
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
              optinform {
                optin {
                  body
                  heading
                  image {
                    altText
                    sourceUrl
                  }
                  fileDownload {
                    mediaItemUrl
                  }
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
  const { data } = await siteNetZeroPageQueryRes.json();
  return data;
}
