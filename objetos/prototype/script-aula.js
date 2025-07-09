function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou';
  }
}

var obj = {
  nome: 'Pedro',
  idade: 27
}

obj.teste = 'Isso';

Pessoa.prototype.andar = function (param) {
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function (param) {
  return this.nome + ' Pessoa nadou';
}

const pedro = new Pessoa('Pedro', 26);

// console.log(Pessoa.prototype);
// console.log(pedro.prototype);

const pais = 'Brasil';
const cidade = new String('Cuiaba');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];


const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return 'true'
  }
}