function saludar(nombre) {
  return "Hola, " + nombre;
}

console.log(saludar("Jairo"));


let cliente = "Jairo";
cliente = "Pepito";
cliente = 20;
console.log(cliente); // 20


let precio;
console.log(precio); // undefined
precio = 20.5;
console.log(precio); // 20.5


const persona = { nombre: "Jairo", edad: 10 };
persona.edad = 21; // válido: mutamos el objeto
// persona = {};    // inválido: reasignación del enlace