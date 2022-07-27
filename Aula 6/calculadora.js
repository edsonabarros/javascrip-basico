function calculadora(){
    const operacao = prompt('Escolha uma opção: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão inteira (%) \n 6 - Potenciação (**)');
    console.log(operacao);

if(!operacao || operacao >= 7){
    alert('Operação invalida');
    calculadora();
}else{

let n1 = Number(prompt('Insira o primeiro valor: '));
let n2 = Number(prompt('Insira o segundo valor: '));
let resultado;

if(!n1 || !n2){
    alert("Valor inválido! Apenas números");
}
else{}

function soma(){
resultado = n1 + n2;
alert(`${n1} + ${n2} = ${resultado}`);
}

function sub(){
resultado = n1 - n2;
alert(`${n1} - ${n2} = ${resultado}`);
}
function mult(){
resultado = n1 * n2;
alert(`${n1} * ${n2} = ${resultado}`);
}
function div(){
resultado = n1 / n2;
alert(`${n1} / ${n2} = ${resultado}`);
}
function divI(){
resultado = n1 % n2;
alert(`O resto da divisão entre ${n1} e ${n2} é: ${resultado}`);
}
function potencia(){
resultado = n1 ** n2;
alert(`${n1} ** ${n2} = ${resultado}`);
}

function novaOperacao(){
    let opcao = prompt('Deseja realizar uma nova operação? \n 1 - Sim \n 2 - Não');
    if(opcao == 1){
        calculadora();
    }
    else if(opcao == 2){
        alert("Obrigado por utilizar!");
    }
    else{
        alert("Digite uma opção valida");
        novaOperacao();
    }

}

if(operacao == 1){
    soma();
}else if(operacao == 2){
    sub();
}else if(operacao == 3){
    mult();
}else if(operacao == 4){
    div();
}else if(operacao == 5){
    divI();
}else if(operacao == 6){
    potencia();
}else{
    alert("Opção não existe");
} 
novaOperacao();
}
}

calculadora();