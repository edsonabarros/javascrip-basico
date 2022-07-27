//simples
function funcao(){
    console.log("mensagem de funcao declarativa");
}
//expressoes de acao = nao precisa de nome
var funcao = function funcaoExpressao(){
    console.log("Expressão");
}
// nao precisa de nome, o var vai ser atribuido
var funcaoExpress = function(){
    console.log("Função 2 de Expressão")
};
funcao();
funcaoExpress();

//arrow function - sintaxe curta 
var arrowFunction = () => {
    console.log("Arrow function");
}
arrowFunction();

