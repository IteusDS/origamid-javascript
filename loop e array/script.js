/*
function tabuada1(){
for (var tabuada = 0; tabuada <= 10; tabuada++){
    console.log("1 x " + tabuada + " = " + 1*tabuada)
}}


function tabuada2(){
for (var tabuada = 0; tabuada <= 10; tabuada++){
    console.log("2 x " + tabuada + " = " + 2*tabuada)
}}


function tabuada3(){
for (var tabuada = 0; tabuada <= 10; tabuada++){
    console.log("3 x " + tabuada + " = " + 3*tabuada)
}}


function tabuada4(){
for (var tabuada = 0; tabuada <= 10; tabuada++){
    console.log("4 x " + tabuada + " = " + 4*tabuada)
}}*/

/*
function tabuada5(){
for (var tabuada = 0; tabuada <= 10; tabuada++){
    console.log("5 x " + tabuada + " = " + 5*tabuada)
}}


function tabuada6(){
for (var tabuada = 0; tabuada <= 10; tabuada++){
    console.log("6 x " + tabuada + " = " + 6*tabuada)
}}


function tabuada7(){
for (var tabuada = 0; tabuada <= 10; tabuada++){
    console.log("7 x " + tabuada + " = " + 7*tabuada)
}}


function tabuada8(){
for (var tabuada = 0; tabuada <= 10; tabuada++){
    console.log("8 x " + tabuada + " = " + 8*tabuada)
}}


function tabuada9(){
for (var tabuada = 0; tabuada <= 10; tabuada++){
    console.log("9 x " + tabuada + " = " + 9*tabuada)
}}
*/


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anos = [1959, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
anos.forEach(function(item){
    console.log('Ganhou em ' + item);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for( var i = 0; frutas.length; i++){
  /*  console.log(frutas[i])
}