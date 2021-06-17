
async function getResource(baseUrl, extraUrl) {
  const response = await fetch(`${baseUrl}${extraUrl}`);

  if (!response.ok) {
    throw new Error(`Could not fetch, received ${response.status}`);
  }

  return response.json();
}

export default getResource;
