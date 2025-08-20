// 'use strict'

// function createButton(text) {
//   const numeroSecreto = '312312jnoas';

//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return Object.freeze({
//     text,
//     element,
//     numeroSecreto
//   });
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// btnComprar.text = 'Novo texto';
// btnComprar.element = 'Novo texto';


// console.log(btnComprar, btnVender);

function Pessoa(nome) {
  if(!(this instanceof Pessoa))
    return new Pessoa
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = Pessoa('André');