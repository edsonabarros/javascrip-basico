// vetores ou arrays
// 
//array comum e funciona com qualquer tipo de dado
//criação de um array com outros arrays dentro
let array = ['string',1, true, ['array1'], ['array2'], ['array3']];

//exibição direta


/* funções de array 
forEach - passar por todo array
push - add um item no final
pop = remove um item no final
shift = remove no inicio
unshift = add no inicio
indexOf = retorna o inice do valor
splice = remove ou substitui pelo indice
slcie - uma parte do array existente
*/
// item e posição com for each
array.forEach(function(item, indice){
    console.log(item, indice);
})

array.push('novo item');
console.log("push: "+array);
array.pop(); //sem nada
console.log("pop: "+array);
array.shift();
console.log("shift: "+array);
array.unshift('novo começo');
console.log("unshift: "+array);
console.log("IndexOf: "+array.indexOf(true));
let novoArray = array.slice(0,3);
console.log(novoArray);
array.splice(0,3);
console.log("splice: "+array);


//objetos - declara entre chaves - propriedades e valores que definem suas caracteristicas
/* podem ser atribuidas a uma variavel, facilitando a manipulação*/

let object = {
    texto: 'Edson', number: 1, boolean: true, array: ["array"], objectInterno: {
        objetoInterno: 'objetoInterno'}
};

console.log(object.objectInterno);
//desestruturação
var texto = object.texto;
console.log(texto);
var array1 = object.array;
console.log(array1);
var {number, objectInterno} = object;
console.log(number, objectInterno);
    
