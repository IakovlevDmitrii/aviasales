const getResource = async (url) => {

  const getResponse = async () => {
    try {
      const res = await fetch(url);
      return res.status === 500 ?
        getResponse() :
        res

    } catch {
      throw new Error()
    }
  };

  try {
    const response = await getResponse();
    return response.json();

  } catch {
    throw new Error()
  }
};

export default getResource;
