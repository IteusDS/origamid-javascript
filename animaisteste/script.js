// Retorne no console todas as imagens do site

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
// Selecione o último p do site

const ptext = document.querySelector('.copy p');
console.log(ptext)