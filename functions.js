//las funciones on un conjunto de sentencias que podemos utilizar para realizar ciertas acciones específicas

//declaración de funciones declarativa:
//utilizando la palabra reservada "function". seguido del nombre de la funcion:
function saludar() {
  console.log("Hola");
}
saludar();

{
  //una funcion puede recibir parámetros :
  function saludo(nombre /*parámetro*/) {
    console.log(`Hola ${nombre}`);
  }
  saludo("José");
}

{
  //otra manera de declarar cuntiones es retornando valores:
  function saludar(nombre) {
    return `Hola ${nombre}`;
  }
  let saludo = saludar("Ricardo");
  console.log(saludo);
}

{
  //también las funciones pueden almacenarse en variables:
  let miFuncion = function (a, b) {
    return a + b;
  };

  let resultado = miFuncion(2, 2);
  console.log(resultado);
}

//arrow functions:
//son alternativas para compactar a una expresion de funcion
//son más limitadas
{
  const restar = (a, b) => {
    return a - b;
  };
  console.log(restar(2, 1));
}

{
  //las arrow function tienen un return implícito:
  //reduce el codigo si es que solo se requiere una línea
  const multiplicar = (a, b) => a * b;
  console.log(multiplicar(2, 2));
}
