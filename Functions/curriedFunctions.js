//funciones currificadas: estas funciones son aquellas que toman un argumento, devuelven otra función que toma el siguiente argumento y así, sucesivamente.
//Ejemplo:

//función currificada con una función normal de JavaScript:

function add(x) {
  return function (y) {
    return x + y;
  };
}
const addTwo = add(2);
console.log(addTwo(3));

//función currificada con "arrow functions":

{
  const add = (x) => (y) => x + y;
  const addTwo = add(4);
  console.log(addTwo(4));
}
