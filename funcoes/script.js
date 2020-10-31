// Crie uma função para verificar se um valor é Truthy

function valorVerdadeiro(numero){
if (typeof numero !== 'number'){
    return "false"
} 
else return "número";
}


//Eu devia ter colocado apenas o !! antes do valor número //

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lados){
    return lados * 4
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function dados() {
    var nome = "Mateus";
    var sobrenome = "Silva";
    return nome + sobrenome
}
// Crie uma função que verifica se um número é par
var resultado = numeroPar / 2;
function numeroPar(numeroinput){

    if (resultado  / 2 == 0) {
        console.log("é par")
    } else {
        console.log ("impar")
    }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function typedado(dado){
   console.log (typeof dado)
}



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function(){ console.log("Mateus")})
// Corrija o erro abaixo/*/
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
 
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  /**/ 