// const cliente = {
//   nome: 'Andre',
//   compras: 10,
//   email: 'andre@gmail.com'
// }

// const {nome: nomeAndre, email = 'email@email.com'} = cliente;

// console.log(email);

// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeira, segunda, tereceira] = frutas;

// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 

// console.log(segundo);

function handleKeyBoard({key, keyCode}) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyBoard);