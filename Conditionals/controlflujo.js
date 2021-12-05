//control de flujo en javascript:

//condicional if estructura:
/*if(condicion){
    //aquí adentro se ejecutará la condicion en caso de que sea verdadera
}else{//aquí adentro se ejecutará el código en caso de que sea falso}*/

//ejemplo:
let comparacion = 3;
if (comparacion > 2) {
  console.log(true);
} else {
  console.log(false);
}

//ejemplo: mayoría de edad
let mayorEdad = 18;
let miEdad = 17;
if (miEdad >= mayorEdad) {
  console.log(true, "Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

//ejemplo: semáforo
let semaforo = "rojo";
if (semaforo === "verde") {
  console.log("puedes seguir avanzando");
} else if (semaforo === "amarillo") {
  console.log("baja la velocidad para detenerte");
} else if (semaforo === "rojo") {
  console.log("detente por completo");
}

//control de flujo switch:
let case_condition = 2;
switch (case_condition) {
  case 1:
    console.log("caso 1");
    break; //break nos permite ejecutar solo la condición que se cumpla

  case 2:
    console.log("caso 2");
    break;

  case 3:
    console.log("caso 3");
    break;

  default:
    console.log("no hay ninguna condicion válida por cumplisrse");
}

//evaluar mas de 1 condicion
let new_condition = "example1";

switch (new_condition) {
  case "example1":
  case "example2":
    console.log("example 1 and exmple 2");
    break; //situamos el break al terminar las 2 condiciones para que ambas se ejecuten
  default:
    console.log("no hay condicion valida");
}
