// EJER 1

let nombre = "Jairo";
console.log(nombre);
nombre = "Jairo";
console.log(nombre);    


// EJER 2

let constante = "PI";
console.log(constante);
constante = "3.1416";
console.log(constante);


// EJER 3

let edad;
console.log(edad);
edad = 26;
console.log(edad);


// EJER 4

let precioBase = 100;
let iva = 0.21;
let precioFinal = precioBase + (precioBase * iva);
console.log(precioFinal);

// EJER 5 
let x = 1; 
{ 
    let x = 2; 
    console.log(x); 
} 
console.log(x); 

// EJER 6 

const lista = [1, 2];
lista.push(3);
console.log(lista);
lista = [];  // Pensé que daría error aquí por ser 'const'


// Mi predicción falló porque confundí "modificar" con "reasignar". 
// 'const' no hace que el array sea inmutable; permite añadir elementos con '.push()'.


// EJER 7 

let nombreUsuario = "Ana"; 
let edadUsuario = 30; 
let esActiva = true; 
let salarioMensual = 1250.5; 

// RETO 

// Con var: la variable tiene alcance global/función, imprime 3, 3, 3
for (var i = 0; i < 3; i++) { 
    setTimeout(() => console.log(i), 0); 
} 

// Con let: la variable tiene alcance de bloque, mantiene el valor de cada iteración (0, 1, 2)
