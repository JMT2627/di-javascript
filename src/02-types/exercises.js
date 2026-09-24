// EJER 1
// 
const texto = "Jairo";
const numero = 21;
const booleano = true;
let indefinido;
const nulo = null;

console.log(texto, typeof texto);
console.log(numero, typeof numero);
console.log(booleano, typeof booleano);
console.log(indefinido, typeof indefinido);
console.log(nulo, typeof nulo);


// EJER 2
// 
const cadenaANumero = Number("42");
const numeroACadena = String(42);

console.log(typeof cadenaANumero);
console.log(typeof numeroACadena);


// EJER 3
// 
const persona = {
  nombre: "Jairo",
  edad: 21,
  ciudad: "Langreo"
};

console.log(persona.nombre);
console.log(persona['ciudad']);

persona.profesion = "Camarero";

console.table(persona);
