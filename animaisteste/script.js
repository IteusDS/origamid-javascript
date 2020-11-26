/*// Retorne no console todas as imagens do site

const imgall = document.querySelectorAll("img");
console.log(imgall)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgselec = document.querySelectorAll("ul li imagem");
console.log(imgselec)
// Selecione todos os links internos (onde o href começa com #)
const imglink = document.querySelectorAll(' [href^="#"]');
console.log(imglink)
// Selecione o primeiro h2 dentro de .animais-descricao
const h2text = document.querySelector('.animais-descricao h2');
console.log(h2text)
// Selecione o último p do site!!!

const ptext = document.querySelector('.copy p');
console.log(ptext);

const ptextone =  document.querySelector( '')*/



// Mostre no console cada parágrado do site

let allp = document.querySelectorAll('p');
console.log(allp);
// Mostre o texto dos parágrafos no console
allp.forEach((item) =>{
    console.log('p')
});


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach(()=> {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++)});

imgs.forEach(() => {
  i++})


