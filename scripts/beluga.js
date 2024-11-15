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

/**
 * Updates the map on Home based on the selected bus start point.
 */
const setMap = async () => {
  const BASE_URL = "https://google.com/maps/place/";
  const $iframe = document.getElementById("map");
  const startingPoint = localStorage.getItem("BusData").start.label.split[" "][2]; // to be changed

  // Extracts the HTML from the request's response body
  const response = await fetch(BASE_URL + startingPoint + "+Salto+SP", { mode: "cors" });
  const htmlString = await response.text();
  const canvas = getCanvas(htmlString);

  // Checks for null responses and returns if so
  if (!html) return ($iframe.contentDocument.body.innerHTML = "Erro na requisição: " + error);

  $iframe.contentDocument.body.innerHTML = canvas;
};

/**
 * Parses a stringified HTML into DOM and returns the canvas with the map.
 */
const getCanvas = (html) => {
  const parser = new DOMParser();
  html = parser.parseFromString(html, "text/html");
  return html.querySelector(".aFsglc widget-scene-canvas");
};
