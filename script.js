const soma = 10 + 5;
const subtracao = 10 - 5;
const multiplicacao = 4 * 3;
const divisao = 50 / 2;

//console.log (soma);
//console.log (subtracao);
//console.log ( multiplicacao);
//console.log (divisao);

const primeiroTexto  = "10";
const segundoTexto = "5";

const resultado = primeiroTexto * segundoTexto;
console.log(resultado);

const textoPreco = "25.75";
const numeroPreco = parseFloat (textoPreco);

//console.log(typeof numeroPreco);

const textoIdade = "19.02";
const numeroIdade = parsint (textoIdade);

//console.log(typeof numeroIdade);

const textoValor  = "42.5";
const numeroValor = Number (textoValor);

//console.log(typeof numeroValor);

// Capturando Valores de Inputs 
// <input id = "campoPrimeiroNumero"> 

const valorDigitado = document.getElementById("campoPrimeiroNumero").value;
const numeroConvertidoo = parseFloat (valorDigitado);

// Exibindo o Resultado  na Tela 
// <p id="textoResultado"> Resultado: 232</p>
document.getElementById("textoResultado").innerText = 'Resulado: ${numeroConvertido}';

//Acionado a Função no Clique do botão 
//<button onclick="somarNumeros()">Somar</button>

function somarNumeros(){
    console.log("a função de soma foi acionada pelo botão");
}
 





