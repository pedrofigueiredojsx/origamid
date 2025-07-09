function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(5));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(pi);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu'
  } else if(cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

function mostraConsole() {
  console.log('Oi');
}

addEventListener('click', mostraConsole);

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 1.80); // undefined

console.log(imc2(1202, 1.80)); // retorna o imc e undefined

function terceiraIdade(idade) {
  if(typeof idade !== 'number'){
    return 'Por favor preencha um número';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
  console.log('testando');
}

console.log(terceiraIdade('dsa'));

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises);

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(nome);

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro
