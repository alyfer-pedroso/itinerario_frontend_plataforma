(() => {
  const $lineSelect = document.getElementById("line_select");
  const $startSelect = document.getElementById("start_select");
  const $indexForm = document.getElementById("index-form");

  let jsonData;

  async function RenderOptionsInSelect(select) {
    const $select = document.getElementById(select);

    if (!jsonData) jsonData = await LoadJSON(`./data.json`);

    if (jsonData) {
      jsonData[select].forEach((item) => {
        const $option = document.createElement("option");
        $option.value = item.value;
        $option.innerHTML = item.label;
        $select.appendChild($option);
      });
    }
  }

  $lineSelect.addEventListener("change", () => RenderOptionsInSelect("start_select"));
  $startSelect.addEventListener("change", () => RenderOptionsInSelect("day_select"));

  $indexForm.addEventListener("submit", (Event) => {
    Event.preventDefault()
    const Form = Event.target

    const FullData = {
      line: Form.elements["line_select"].value,
      start: Form.elements["start_select"].value,
      day: Form.elements["day_select"].value,
    }

    localStorage.setItem("BusData", JSON.stringify(FullData))
  })

  RenderOptionsInSelect("line_select");
})();