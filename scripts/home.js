(() => {
  const $iframe = document.getElementById("map");
  let BusData;

  try {
    // Tentar pegar o valor do BusData
    BusData = JSON.parse(localStorage.getItem("BusData"));

    if (BusData == null) {
      // se o BusData estiver vazio, vai acontecer isso aqui em baixo
      throw new Error(); // vai jogar um Erro propositalmente
    }
  } catch (error) {
    // Se der algum erro, vai ser tratado aqui em baixo
    alert("Os dados da linha não foram encontrados"); // vai aparecer uma msg para o usuário
    window.open("index.html", "_self"); // vai redirecionar para o index.html (página de seleçao da linha)
  }

  // TODO: Geovanna - tarefas;
  // TODO: Heloisa - tarefas;

  $iframe.addEventListener("onload", async () => await setMap());
})();
