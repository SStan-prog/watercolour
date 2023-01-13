export async function privacyPolicyPageQuery() {
  const sitePrivacyPolicyPageQueryRes = await fetch(
    import.meta.env.WP_API_URL,
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          page(id: "/privacy-policy", idType: URI) {
            content
            title
            seo {
              metaDesc
              title
              twitterDescription
              twitterTitle
              twitterImage {
                sourceUrl
              }
            }
          }
        }
              `,
      }),
    }
  );
  const { data } = await sitePrivacyPolicyPageQueryRes.json();
  return data;
}
