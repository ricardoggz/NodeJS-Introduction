//manipulación de arreglos con forEach:
//forEach solo nos permite recorrer los elementos de un arreglo
let pets = ["dog", "cat", "fish", "hamster"];
pets.forEach((pet) => console.log(pet));

/*manipulacion de arreglos con:
 1._puhs
 2._ pop
 3._ shift*/
let pets = ["dog", "cat", "fish", "hamster"];
pets.push("horse"); //agrega un elemento al array
console.log(pets);
pets.shift(); //elimina u obtiene el primer elemento de un array
console.log(pets);
pets.pop(); //elimina u obtiene el último elemento de un array
console.log(pets);

//manipulación de arreglos con filter:
//filter no modifica el arreglo, filter arrojará un nuevo arreglo

let students = [
  { name: "Ricardo", age: 21, size: 1.71 },
  { name: "Fernando", age: 23, size: 1.76 },
  { name: "Ernesto", age: 15, size: 1.71 },
];

const filtrado = students.filter(
  (student) => student.age > 20 && student.size > 1.71
);
console.log(filtrado);

//
const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];
const filtrarOvejas = ovejas.filter((oveja) => oveja.color === "rojo");
console.log(filtrarOvejas);
