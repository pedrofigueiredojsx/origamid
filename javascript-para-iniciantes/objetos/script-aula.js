var pessoa = {
  nome: 'Pedro',
  idade: 26,
}

console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return height / 2;
  }
}

menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi');
}


var bg = menu.backgroundColor;