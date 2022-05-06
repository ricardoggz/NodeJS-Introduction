/*En JavaScript las variables y funciones se asignan en memoria, basicamente es como si las definieramos en lo más alto del scope.*/
//Ejemplo de hoisting en una función:

greet(); //Primero mandamos llamar la función y despues la declararemos:

function greet (){
    console.log("Hello world");
}; //Output: "Hello world

/*En el caso de las variables es lo mismo, primero debemos asignarlas, pero no declararlas, ya que el hoisting puede actuar de manera extraña*/

var message = "Hello world";

(
    function  (){
        console.log(message); //output: undefinded
        var message = "Hello"
        console.log(message); //output: hello
    }
)();

//nota: volder a declarar una variable con el miso nombre usando var no es una muy buena idea.