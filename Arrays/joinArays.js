//manipulacion de arreglos con join:
//join nos ayuda a uir todos los elementos de un arreglo y a aprtir de ahí unirlos y formar un string

let palabra = ["h", "o", "l", "a"];
let unionPalabra = palabra.join("-");
console.log(palabra);
console.log(unionPalabra);

//join puede utilizarse paras generar archivos csv
let users = [
  { name: "Ricardo", id: 1 },
  { name: "José", id: 4 },
  { name: "Ernesto", id: 6 },
];
//console.log(users.join());
let csvGenerator = (array, separador = ",") => {
  let headers = Object.keys(array[1]).join(separador);
  let data = array.map((element) => Object.values(element).join(separador));
  console.log(headers);
  data.forEach((element) => console.log(element));
};

csvGenerator(users);

//Object.values imprime los valores de un objeto
//Object.keys imprime unicamente las claves de un objeto
