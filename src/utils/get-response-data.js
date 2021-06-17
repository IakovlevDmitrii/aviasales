
import getResource from './get-resource';

async function getResponseData(baseUrl, extraUrl, responseField) {
  const response = await getResource(baseUrl, extraUrl);
  const {[responseField]: data} = response;

  return data;
}

export default getResponseData;
