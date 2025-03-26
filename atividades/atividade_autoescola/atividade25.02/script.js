//operadores bollean

let pao = true;
let bolo = false;
// console.log(pao && bolo);
let bolo2 = !bolo;

console.log(bolo2);

// let i = 0
// console.log(i++) //aqui ele mostra depois executa, voce precisa pedir console.log dnv para ver a execução
// console.log(i)
// console.log(++i) //pre-decremento, ele executa e mostra

let i = 2;
let a = 3;
a = a + i;
a += --i;
console.log(`a:${a} i:${i}`);

let idade = 17;
console.log(
  idade == 18
    ? "ja pode ser preso"
    : idade == 16
    ? "menor de idade"
    : idade == 70
    ? "paulo"
    : "outro"
);
