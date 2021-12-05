//manipulacion de arrreglos con some y every
//some nos arrojará un valor lógico si es que un elemento en específico cumple una condicion
//every nos retorna un valor lógico si todos los elementos cumplen con una característica

//evaluar si al menos uno de los numeros es par
{
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let pares = numbers.some((number) => number % 2 === 0);
  console.log(pares);
}

//evaluar si al menos uno de los numeros es par
{
  let numbers = [1, 3, 5, 7, 9, 11];
  let pares = numbers.some((number) => number % 2 === 0);
  console.log(pares);
}

//evaluar si todos los numeros son pares, si todos cumplen esta condicion, el valor logico sera true

{
  let numbers = [2, 4, 6, 8, 10];
  let pares = numbers.every((number) => number % 2 === 0);
  console.log(pares);
}
//evauar si todos los numeros son pares, si uno no lo es el valor lófico será false
{
  let numbers = [1, 2, 4, 6, 7, 8, 10];
  let pares = numbers.every((number) => number % 2 === 0);
  console.log(pares);
}
