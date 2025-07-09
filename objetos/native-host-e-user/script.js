// Liste 5 objetos nativos
Object
Function
String
Array
Boolean
Number
Math

// Liste 5 objetos do browser
NodeList
HTMLCollection
Element
Document
Window
Navigator
history

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitVisibilityState !== "undefined") {
  console.log('Existe');
} else {
  console.log('Não existe');
}