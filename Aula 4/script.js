var jogador1 = 0;
var jogador2 = 1;
var placar;

if (jogador1 > 0 && jogador2 == 0) {
  console.log("Jogador marcou gol");
  placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
  console.log("Jogador2 marcou gol");
  placar = jogador2 > jogador1;
} else {
  console.log("Não marcou ainda");
}
///ternario

jogador1 != -1 && jogador2 != -1
  ? console.log("Jogadores são válidos")
  : console.log("Não válido");

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log("jogador 1 ganhou");
    break;
  case (placar = jogador2 > jogador1):
    console.log("jogador 2 ganhou");
    break;
  default:
    console.log("empate");
    break;
}

let array = ["array1", "array2", "array3", "array4"];

let objeto = {
    propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3",
}
//for
for(let indice = 0; indice < array.length; indice ++){
    console.log(indice);
}
// for in - repetição a partir de uma propriedade

for(let i in array){
    console.log(i);
}

for(i in objeto){
    console.log(i);
}
//for of 

for(i of array){
    console.log(i);
}
// for if não serve para objeto
for (i of objeto.propriedade1){
    console.log(i);
}

var a = 0;
while(a < 10){
    a++;
    console.log(a);
}
var b = 0;
do{
    b++;
    console.log(b);
} while(b < 5);