//Programacion orientada a objetos:
//clases
//Para definir clases se debe utilizar camel case
//Las clase se identifican por que contienen propiedades y métodos

class User {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

//así llamaremos a la clase y le pondremos valores al constructor
const user= new User("Ricardo", "Guevara");
console.log(user);
