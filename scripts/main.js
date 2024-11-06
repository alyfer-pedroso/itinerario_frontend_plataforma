(() => {
  const $lineSelect = document.getElementById("line_select");

  let jsonData;

  async function RenderOptionsInSelect(select) {
    const $select = document.getElementById(select);

    if (!jsonData) jsonData = await LoadJSON(`./data.json`);

    if (jsonData) {
      jsonData[select].forEach((item) => {
        const $option = document.createElement("option");
        $option.value = item.id;
        $option.innerHTML = item.label;
        $select.appendChild($option);
      });
    }
  }

  $lineSelect.addEventListener("change", () => RenderOptionsInSelect("start_select"));

  RenderOptionsInSelect("line_select");
})();
