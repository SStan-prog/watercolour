export async function homePageQuery() {
  const siteHomePageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        page(id: "/", idType: URI) {
          seo {
            metaDesc
            title
            twitterDescription
            twitterTitle
            twitterImage {
              sourceUrl
            }
          }
          neighbourhood_features {
            sectionHeading
            body
            feature {
              body
              heading
              icon {
                altText
                sourceUrl
              }
            }
          }
          testimonials {
            heading
            testimonials {
              body
              image {
                altText
                sourceUrl
              }
              name
              link
            }
          }
          homeVideos {
            videos {
              video
            }
            homeVideosSectionText {
              body
              videosheading
            }
          }
          home_middle_cta {
            cottageStyleHome {
              body
              buttons {
                buttonLink
                buttonText
              }
              heading
              image {
                altText
                sourceUrl
              }
            }
            storyOfWatercolour {
              body
              buttonLink
              buttonText
              image {
                altText
                sourceUrl
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
  const { data } = await siteHomePageQueryRes.json();
  return data;
}
