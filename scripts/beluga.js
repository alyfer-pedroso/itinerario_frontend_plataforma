const LoadJSON = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((response) => response.json());
    return response;
  } catch (error) {
    return;
  }
};
