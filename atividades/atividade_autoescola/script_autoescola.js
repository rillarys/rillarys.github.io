let verificar = () => {
  let numero = window.document.querySelector("#id_numero").value;
  let resultado = document.getElementById("id_resultado");

  if (numero <= 18) {
    resultado.innerHTML = "Inapto para o inicio";
  } else if (numero <= 49) {
    resultado.innerHTML =
      "Apto para o inicio <p> Você fara a renovação da habilitação a cada 10 anos";
  } else if (numero <= 79) {
    resultado.innerHTML =
      "Apto para o inicio <p> Você fara a renovação da habilitação a cada 5 anos";
  } else {
    resultado.innerHTML =
      "Apto para o inicio <p> Você fara a renovação da habilitação a cada 3 anos";
  }
};
