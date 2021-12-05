/*1. Escribir un programa que calcule el número de segundos que existen en un día.
Para ello debemos multiplicar los segundos de un minuto, por los minutos de
una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.*/

const secondsDay = 60 * 60 * 24;
console.log(secondsDay);

/*2. Realiza un programa que a partir de los valores ancho=2 y alto=5,
calcule el área de un rectángulo.*/

const area = 2 * 5;
console.log(area);

/*3. Hacer un conversor de grados centígrados a grados Fahrenheit.
Para ello deberé multiplicar por 9/5 y sumar 32.
Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.*/

const converter = 20 * 1.8 + 32;
console.log(converter);

//Ejercicios Control de Flujos

/*1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch*/

{
  let day = "";
  if (day === "lunes") {
    console.log("monday");
  } else if (day === "martes") {
    console.log("tuesday");
  } else if (day === "miercoles") {
    console.log("wednesday");
  } else if (day === "jueves") {
    console.log("thursday");
  } else if (day === "viernes") {
    console.log("friday");
  } else if (day === "sabado") {
    console.log("saturday");
  } else if (day === "domingo") {
    console.log("sunday");
  } else {
    console.log("no se ha insertado ningun día de la semana");
  }
}

{
  let day = "";
  switch (day) {
    case "lunes":
      console.log("monday");
      break;
    case "martes":
      console.log("tuesday");
      break;
    case "miercoles":
      console.log("wednesday");
      break;
    case "jueves":
      console.log("thursday");
      break;
    case "viernes":
      console.log("friday");
      break;
    case "sabado":
      console.log("saturday");
      break;
    case "domingo":
      console.log("sunday");
      break;
    default:
      console.log("no se ha insertado ningun día de la semana");
  }
}

/*2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
Si la compra supera los $50 el gasto de envío será gratuito
El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch*/

{
  let total = 100;
  if (total <= 10) {
    console.log(
      `el costo de envio es: $3, el total a pagar más envío es : ${total + 3}`
    );
  } else if (total <= 20 && total > 10) {
    console.log(
      `el costo de envio es: $5, el total a pagar más envío es : ${total + 5}`
    );
  } else if (total <= 50 && total > 20) {
    console.log(
      `el costo de envio es: $7, el total a pagar más envío es : ${total + 7}`
    );
  } else if (total > 50) {
    console.log(`el costo de envio es: $0, el total a pagar  es : ${total}`);
  } else {
    console.log("no hay un valor a evaluar");
  }
}

{
  let total = 100;
  switch (true) {
    case total <= 10:
      console.log(
        `el costo de envío es de $3, su total a pagar es ${total + 3}`
      );
      break;
    case total <= 20 && total > 10:
      console.log(
        `el costo de envío es de $5, su total a pagar es ${total + 5}`
      );
      break;
    case total <= 50 && total > 20:
      console.log(
        `el costo de envío es de $7, su total a pagar es ${total + 7}`
      );
      break;
    case total > 50:
      console.log(`el costo de envío es de $0, su total a pagar es ${total}`);
      break;
    default:
      console.log("ingrese una cantidad a evaluar");
  }
}
