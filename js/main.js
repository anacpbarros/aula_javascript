
function clicou(){
    
    //alert ("Obrigado por clicar");

// ao invés de dar um alert, pode-se retornar um texto na tela referenciando uma tag por meio de uma id
// <h3 id="agradecimento">Obrigado por clicar!</h3>     
    
    //document.getElementById("agradecimento"); 

// ou ainda, usar funções para injetar o HTML, então a tag (seja <h> ou <p>) no HTML não deve ter um texto
    document.getElementById("agradecimento").innerHTML = " <b>Obrigado por clicar!</b>"; //sendo um HTML pode-se formatar o texto como quiser
    
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //ou
    window.location.href = "https://digitalinnovation.one/"; //aqui não é função apenas altera a referência
}

/*
// se usar variável global e local com o mesmo nome,
// e pedir para o console imprimir, 
//o resultado será referente à variável global

var validar = 0; //global

function validaIdade (idade) {
    var validar; //local // se não declarar a variável local e deixar apenas a global, deve-se declarar a função após o prompt e antes do console (**)
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual é a sua idade?");
validaIdade (idade); //(**) 
console.log (validar); //dará erro se a variável global só estiver declarada sem valor atribuído a ela, ou, se 

console.log (validaIdade (idade)) //levará em conta a variável da função, pois está chamando a função
*/

/*
//Alterar nome
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
//somar
function soma (n1, n2) {
    return n1 + n2;
}
alert(soma(5,10));
*/

/*
//Ver data
var d = new Date();
//alert (d);
//para saber o mês deve-se adicionar o 1, pois a contagem começa em 0
alert (d.getMonth() + 1);
//segue o mesmo raciocínio para dia, ano, minutos, etc
*/

/*
//Ciclo de repetição
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1; //ou count ++ / count +=1 
}

//ou

var count;
for (count = 0; count <= 5; count ++){
    alert(count);
}
*/

/*
//Condicional
var idade = 18;
if (idade >= 18) {
    alert ("Maior de idade");
} else {
    alert ("menor de idade");
};
*/

/*
//Usa-se prompt para imprimir pergunta sobre informações que sejam necessárias,
//por exemplo, sites que precisam saber idade do usuário
var idade = prompt ("Qual sua idade?");
if (idade >= 18) {
    alert ("Maior de idade");
} else {
    alert ("menor de idade");
};
*/

/*
//lista de dicionários
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
//Dicionário
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert (fruta.cor);
*/

/*
var lista = ["maçã", "pêra", "laranja"];
//ver lista
console.log(lista);
//inserir item
lista.push("uva");
//remover item
lista.pop();
//tamanho da lista
console.log(lista.length);
//imprimir lista de forma reversa
console.log(lista.reverse());
//converter array em string
console.log(lista.toString());
//imprimir só o primeiro item da array
console.log(lista[0]);
//imprimir só a primeira letra da primeira palavra da lista
console.log(lista.toString()[0]);
//imprime como string porém pode separar itens com traços
console.log(lista.join(" - "));
//ou pode separar itens com pipelines
console.log(lista.join(" | "));
//ou ainda separar itens com espaços
console.log(lista.join(" "));
*/

/*var nome = "Ana Claudia Barros";
//alert ("meu primeiro js");
//alert ("Bem vinda" + nome);
var idade = 27;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos");
//alert (idade + idade2);
console.log(nome);
console.log(idade);
//console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
*/