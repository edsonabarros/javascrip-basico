// tipos primitivos

// boolean

var vOuF = false;
console.log(vOuF);

console.log(typeof(vOuF));

var numero = 5;
console.log(numero);
console.log(typeof(numero));

var nome = 'Edson';
console.log(nome);
console.log(typeof(nome));0

// var sem nada é null - global e local.

// let é local ou bloco - null;

//const = precisa ser inicializado

let variavel= "teste";
console.log(variavel)

function escopo(){
    let escopoLocal = "teste2";
    console.log("Variavel Local"+escopoLocal);
    console.log(typeof(escopoLocal));
}

escopo();

//comparação 

// == -> valor igual
// === valor e tipo igual

var testeNumero = 0 == 0; //true;
var testeNumero2 = '0' == 0; //false

var adicao = 1 + 2;
var sub = 2 - 1;
var div = 9 / 3;
var divReal = 9 % 2;
var multi = 9 * 3;
var fatorial = 2 ** 10; 

console.log(adicao, sub, div, divReal, multi, fatorial);

var maiorQue = 5 > 2;
var maiorIgual = 5 >= 5;
var menorQue = 5 < 2;
var menorIgual = 5 <= 2;

console.log(maiorQue, menorQue, maiorIgual, menorIgual);

var e = true && false; 
var ou = true || false;
var nao = !true;

console.log(e, ou, nao);