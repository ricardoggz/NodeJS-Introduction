//manipulación con map:
//map es inmutable, no retornará el arreglo de orgien, sino un nuevo arreglo
let array = ["Ricardo", "José", "Ernesto", "Fernando"];
//utilizaremos map para crear un objeto por cada estudiante con nuievas propiedades
let asistencia = array.map((nombre) => {
  return {
    nombre: nombre,
    asistio: false,
  };
});
console.log(array, asistencia);

//otro ejemplo:

let productos = [
  { nombre: "camisetas", precio: 10 },
  { nombre: "zapatos", precio: 20 },
  { nombre: "pantalones", precio: 25 },
];

let impuesto = productos.map((producto) => {
  return {
    ...producto /*spread operator: nos ayuda a expandir el arreglo al nuevo objeto*/,
    valorImpuesto: 0.16,
  };
});

let precios = productos.map((producto) => producto.precio);
console.log(productos);
console.log(impuesto);
console.log(precios);
