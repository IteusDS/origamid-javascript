// A estrutura dos objetos é:
// Crie um objeto com os seus dados pessoais
var dados = {
    nome: 'Mateus',
    sobrenome: 'Silva',
    idade: 28,
    ondeMora: 'zona sul',
    temCarro: false,
}

// Deve possui pelo menos duas propriedades nome e sobrenome
console.log(dados.nome + dados.sobrenome);
console.log(dados.sobrenome)
// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dados.nome + " " + dados.sobrenome)
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  
  carro.preco = 300;

  console.log(carro.preco)
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  var cao = {
      raca: 'labrador',
      cor: 'black',
      idade: 10,
      ladoHomem: true

  }
  

  //Errei a última! Era para ter criado uma função.

  var cao = {
    raca: 'labrador',
    cor: 'black',
    idade: 10,
    ladoHomem(oessoa){
        if(pessoa === "homem"){
            return 'Latir';
        } else {
            return 'Nada'
        }
    }

}