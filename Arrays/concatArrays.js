//manipulacion de arreglos con:
/*
1._concat
2._sort
2._slice
3._splice*/

//concat:
//nos permite concatenar arrays
{
  let array = [1, 2, 3, 4, 5];
  let arrayTwo = [6, 7, 8, 9, 10];
  let arraythree = array.concat(arrayTwo);
  console.log(arraythree);
  //concatena4 con el spread operator:
  let arrayFour = [...array, ...arrayTwo];
  console.log(arrayFour);
}

//sort:
//nos permite ordenar arreglos

{
  let array = [1, 2, 3, 4, 5, 0];
  console.log(array.sort());

  //con letras:
  let letters = ["a", "c", "b", "d"];
  console.log(letters.sort());

  //con strings:
  //ordena los arreglos en base al orden y al codigo ascii
  let months = ["enero", "febrero", "abril", "marzo"];
  console.log(months.sort());

  //
  let numbers = [1, 10000, 30, 4];
  let orden = numbers.sort((a, b) => a - b);
  console.log(orden);
}

//splice:
//splice nos permite a remover o modificar elementos de un arreglo
{
  //removiendo elementos
  let names = ["Ricardo", "José", "Fernando"];
  names.splice(1, 1, "Ernesto");
  console.log(names);
}

//slice
//retorna una copia de una parte más pequeña de nuestro arreglo
{
  let names = ["Ricardo", "José", "Fernando"];
  let resultado = names.slice(1, 2); //no incluye la ultima posicion
  console.log(resultado);
}
