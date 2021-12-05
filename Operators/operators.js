//operators in JavaScript

//asignation operator:
var x = 2;
var y = true;

//adicion operator:
var x = 2;
var y = 1;
x += y; //x=x+y
console.log(x);

//operador de resta:
var x = 1;
var y = 2;
x -= y; //x=x-y
console.log(x);

//operador de multiplicacion:
var x = 1;
var y = 2;
x *= y; //x= x*y
console.log(x);

//operador de division:
var x = 1;
var y = 2;
x /= y; //x= x/y
console.log(x);

//operador de residuo
var x = 1;
var y = 2;
x %= y;
console.log(x);

//operador de exponenciación:
var x = 2;
var y = 3;
x **= y; //x = x**Y
console.log(x);

//operadores de comparación:
//operador igual "= ="
console.log(3 == 3); //= true
console.log(3 == "3"); // = true

//operador no es igual:
//!=
console.log(3 != 3); //= false

//operador estrictamente igual (valor y tipo de dato):
// ===
console.log(3 === 3); //true
console.log(3 === "3"); //false

//operadopr de desigualdad estricta:
//!==
console.log(3 !== 3); //false
console.log(3 !== "3"); //true

//operadores >, <, >=, <=

console.log(3 > 2); //true
console.log(3 < 2); //false
console.log(3 >= 2); //true
console.log(3 <= 2); //false

//operadores aritméticos:
//suma, resta. multiplicación, módulo, exponenciación y división:
//+,-,*,%,**,/

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 % 2);
console.log(2 ** 2);

//operadores aritméticos  de incremento:
//++
var number = 0;
console.log(number++); // =0
console.log(number); // =1

//operador aritmético de decremento:
//--
var number = 3;
console.log(number--);
console.log(number);

//operadores lógicos:
//and &&, or ||, not !
//and
console.log(3 < 5 && 5 > 10); //false
//or
console.log(true || true); //true
//not
console.log(!true); //false

//operador de cadena o concatenación para strings : "+"
var nombre = "José";
var apellido = "Guzmán";

var nombrecompleto = nombre + " " + apellido;
console.log(nombrecompleto);

//operador condicional
console.log(2 < 3 ? true : false);



