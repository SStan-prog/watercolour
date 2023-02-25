export async function popUpQuery() {
  const sitePopUpQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
            themeGeneralSettings {
                popup {
                  bodyText
                  form
                  heading
                  buttonText
                  image {
                    altText
                    sourceUrl
                  }
                }
              }
          }
                `,
    }),
  });
  const { data } = await sitePopUpQueryRes.json();
  return data;
}
