//javascript arrays:
let arrayNames = ["Ricardo", "José", "Ernesto"];

console.log(arrayNames);
console.log(typeof arrayNames);

//arrays destructuring:
let [posicion1, posicion2] = arrayNames;
console.log(posicion1, posicion2);

//operador de miembro o acceso de propiedad:
let arrayFruits = ["apple", "banana", "lemon"]; //= 0,1,2
console.log(arrayFruits[0], arrayFruits[1]);

//manipulación de arreglos con filter:
//filter no modifica el arreglo, filter arrojará un nuevo arreglo

let students = [
  { name: "Ricardo", age: 21, size: 1.71 },
  { name: "Fernando", age: 23, size: 1.76 },
  { name: "Ernesto", age: 15, size: 1.71 },
];

const filtrado = students.filter(student => student.age > 20 && student.size > 1.71); 
console.log(filtrado);

//
const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];
const filtrarOvejas = ovejas.filter(oveja => oveja.color === "rojo");
console.log(filtrarOvejas);
