{
  //ciclos while:
  //primero evalua la condición y después ejecuta un ciclo

  let contador = 0;
  while (contador < 5) {
    contador = contador += 1;
    console.log("Contador");
  }
}

{
  //ciclos do while
  //se ejecuta al menos una vez y después evalúa la condición

  let contador = 0;
  do {
    contador = contador += 1;
    console.log("contador");
  } while (contador <= 10);
}

{
  //ciclos for
  //sintaxis = (expresion incial; expresion condicional; expresión de actualización)
  //i = index
  //for también evalúa primero la condición y después ejecuta el ciclo
  for (let i = 1; i < 5; i++) {
    console.log("contador");
  }
}

{
  //ciclos for in
  //sirve unicamente para iterar dentro de objetos javascript
  //sintaxis = (variable; operador in; objeto)
  let persona = {
    name: "Ricardo",
    age: 21,
    size: "1.73m",
  };
  for (let clave in persona) {
    console.log(clave, persona[clave]);
  }
}

{
  //cicols for of
  //sintaxis = (variable; operador of; arreglo)
  let numbers = [1, 2, 3, 4];
  for (let valor of numbers) {
    console.log(valor);
  }

  //ejemplo con strings:
  let names=['Ricardo', 'Fernando', 'Ernesto'];
  for (let names_valor of names){
    console.log(names_valor);

  }
}
