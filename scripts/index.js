(() => {
  const $lineSelect = document.getElementById("line_select");
  const $startSelect = document.getElementById("start_select");
  const $indexForm = document.getElementById("index-form");

  let jsonData; // variável armazena os dados do JSON -> ele começa vazio

  // Essa função irá limpar as opções do select que será passado no select_name
  function clear_select(select_name) {
    const select = document.getElementById(select_name);
    for (let position = select.options.length - 1; position > 0; position -= 1) {
      select.remove(position);
    }
  }

  async function RenderOptionsInSelect(select_name) {
    // Método reutilizável para inserir opções dentro de um seletor
    const $select = document.getElementById(select_name); // armazena o seletor em uma váriavel através do nome passado

    if (!jsonData) {
      // se o jsonData estiver vazio, ele vai carregar os dados do JSON a partir do código abaixo
      jsonData = await LoadJSON(`./database/data.json`); // carregar os dados do JSON e salvar na variável
    }

    // se o jsonData estiver cheio, ele vai limpar o seletor e  renderizar as opções dentro dele
    if (jsonData) {
      clear_select(select_name); // limpando as opções do seletor
      jsonData[select_name].forEach((item) => {
        const $option = document.createElement("option"); // criar um html OPTION
        $option.value = item.value; // o valor do OPTION é igual o valor do ITEM do ARRAY DO JSON
        $option.innerHTML = item.label; // o texto do OPTION é igual o texto do ITEM do ARRAY DO JSON

        $select.appendChild($option); // adicionar o OPTION criado dentro do seletor
      });
    }
  }

  $lineSelect.addEventListener("change", () => RenderOptionsInSelect("start_select"));
  $startSelect.addEventListener("change", () => RenderOptionsInSelect("day_select"));

  $indexForm.addEventListener("submit", (Event) => {
    Event.preventDefault();
    const Form = Event.target;

    const FullData = {
      line: Form.elements["line_select"].value,
      start: Form.elements["start_select"].value,
      day: Form.elements["day_select"].value,
    };

    localStorage.setItem("BusData", JSON.stringify(FullData));
  });

  RenderOptionsInSelect("line_select");
})();
