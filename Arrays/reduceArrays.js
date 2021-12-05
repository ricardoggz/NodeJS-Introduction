//manipulacion de arreglos con reduce:
//reduce nos permite reducir todo el array a un solo valor
//reduce es inmutable, arrojará un nuevo mvalor
let calificaciones = [10, 9, 8, 8.5, 9.3];
let suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);
console.log(suma);
console.log(suma / calificaciones.length);

//otro ejemplo:
let edades = [12, 21, 21, 9, 7, 56, 23, 56, 67, 9];

//output: objeto con la cantidad de edades que hay
let output = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {});
console.log(edades);
console.log(output);

//otro ejemplo:
let productos = [
  { nombre: "playeras", precio: 150, vendidas: 23 },
  { nombre: "jeans", precio: 550, vendidas: 33 },
  { nombre: "tenis", precio: 2500, vendidas: 189 },
];
let ventas = productos.reduce((acumulador, producto) => {
  let totalVentas = producto.precio * producto.vendidas;
  acumulador[producto.nombre] = totalVentas;
  return acumulador;
}, {});
console.log(ventas);

//otro ejemplo:
let students = [
  { nombre: "Ricardo", grupo: 2743, matriculado: true },
  { nombre: "Daniel", grupo: 2743, matriculado: true },
  { nombre: "Andrés", grupo: 2742, matriculado: false },
];

//obtener cantidad de estudiantes matriculados y los que no
//1._realizar un mapeo del arreglo, para obtener la propieda especifica

let matricula = students
  .map((student) => student.matriculado)
  .reduce(
    (acumulador, item) => {
      if (item) {
        acumulador.matriculado += 1;
      } else {
        acumulador.noMatriculado += 1;
      }
      return acumulador;
    },
    { matriculado: 0, noMatriculado: 0 }
  );
console.log(students);
console.log(matricula);
