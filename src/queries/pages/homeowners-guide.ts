export async function homeownersGuideQuery() {
  const siteHomeownersGuidePageQueryRes = await fetch(
    import.meta.env.WP_API_URL,
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
            page(id: "/homeowners-guide", idType: URI) {
              seo {
                metaDesc
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  sourceUrl
                }
              }
              homeownersGuide {
                homeownersGuide {
                  text
                  previewImage {
                    altText
                    sourceUrl
                  }
                  fullDownload {
                    altText
                    mediaItemUrl
                  }
                  previewDownload {
                    mediaItemUrl
                  }
                }
              }
            }
          }
                      `,
      }),
    }
  );
  const { data } = await siteHomeownersGuidePageQueryRes.json();
  return data;
}
