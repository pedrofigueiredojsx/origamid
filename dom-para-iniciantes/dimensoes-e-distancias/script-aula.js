const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');

const h2Left = primeiroH2.offsetLeft;

const h2Rect = primeiroH2.getBoundingClientRect();


console.log(h2Rect.top);

if(h2Rect.top < 0) {
  console.log('Passou do elemento');
}

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset
);

const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}
