let calcular = () => {
  let peso = window.document.querySelector("#id_peso").value;
  //   console.log(peso);
  let altura = window.document.querySelector("#id_altura").value;
  //   console.log(altura);
  let resultado = document.getElementById("id_resultado");

  let nome = document.getElementById("id_nome").value;
  peso = peso.replace(",", ".");
  altura = altura.replace(",", ".");
  peso = parseFloat(peso);
  altura = parseFloat(altura);

  let calculoIMC = peso / (altura * altura);

  resultado.innerHTML = ` olá <strong> ${nome} </strong>!
   Seu IMC é: <strong>${calculoIMC.toFixed(
     2
   )} </strong> e sua classificação é: `;

  resultado.innerHTML +=
    calculoIMC < 18.5
      ? "abaixo do peso normal"
      : calculoIMC >= 18.5 && calculoIMC <= 24.9
      ? "peso normal"
      : calculoIMC > 24.9 && calculoIMC <= 29.9
      ? "sobrepeso"
      : calculoIMC > 29.9 && calculoIMC <= 34.9
      ? "obesidade grau 1"
      : calculoIMC > 34.9 && calculoIMC <= 39.9
      ? "obesidade grau 2"
      : calculoIMC > 39.9
      ? "obesidade grau 3"
      : "ERRO";

  // if (calculoIMC < 18.5) {
  //   resultado.innerHTML = `seu IMC é ${calculoIMC.toFixed(
  //     2
  //   )} você está abaixo do peso.`;
  // } else if (calculoIMC >= 18.5 && calculoIMC < 24.9) {
  //   resultado.innerHTML = `seu IMC é ${calculoIMC.toFixed(
  //     2
  //   )} você está com peso normal.`;
  // } else if (calculoIMC >= 25 && calculoIMC < 29.9) {
  //   resultado.innerHTML = `seu IMC é ${calculoIMC.toFixed(
  //     2
  //   )} você está abaixo do peso`;
  // } else if (calculoIMC >= 30 && calculoIMC < 34.9) {
  //   (resultado.innerHTML = "seu IMC é" + calculoIMC.toFixed(2)),
  //     (resultado.innerHTML = `seu IMC é ${calculoIMC.toFixed(
  //       2
  //     )} você está com obesidade grau 1`);
  // } else if (calculoIMC >= 35 && calculoIMC < 39.9) {
  //   (resultado.innerHTML = "seu IMC é" + calculoIMC.toFixed(2)),
  //     (resultado.innerHTML = `seu IMC é ${calculoIMC.toFixed(
  //       2
  //     )} você está com obesidade grau 2`);
  // } else {
  //   (resultado.innerHTML = "seu IMC é" + calculoIMC.toFixed(2)),
  //     (resultado.innerHTML = `seu IMC é ${calculoIMC.toFixed(
  //       2
  //     )} você está com obesidade grau 3`);
  // }
  // resultado.innerHTML = `"seu imc é" ${calculoIMC} "e você está:" ${resultado}`;

  console.log(calculoIMC);
};
