// const pessoa = new Object({
//   nome: 'Pedro'
// })

// console.log(pessoa);

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro).init('Honda');
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerar';
//   },
//   buzinar() {
//     return 'buzinou';
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// Object.assign(moto, funcaoAutomovel, carro);

// console.log(moto);

// const moto = {
//   capacete: true
// }

// Object.defineProperties(moto, {
//   rodas: {
//     enumerable: true,
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4 + ' Total Rodas'
//     }
//   },
// });

// console.log(moto);

// const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');  

// Object.getOwnPropertyNames(Array.prototype);

// const frutas = ['Banana'];

// console.log(Object.getPrototypeOf('frutas'));
// console.log(Array.prototype);

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// const novaFruta = frutas1;

// novaFruta[0] = 'Uva';

// console.log(frutas1);

// Object.is(frutas1, novaFruta);

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }

// Object.preventExtensions(carro);
// carro.portas = 4;
// delete carro.marca;

// carro.marca = 'Honda';

// console.log(carro);
// console.log(Object.isSealed(carro));

const frutas = ['Banana', 'Pêra'];
const frase = 'Oi frase';
const somar = function(a, b) {
  return a + b;
}

const carro = {
  marca: 'Ford'
}

console.log(carro.toString());

console.log(Object.prototype.toString.call(somar));