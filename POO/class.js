//Programacion orientada a objetos:
//clases
//Para definir clases se debe utilizar camel case
//Las clase se identifican por que contienen propiedades y métodos

class User {
  constructor(nombre, apellido, user) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.user = user;
  }
}

//así llamaremos a la clase y le pondremos valores al constructor
const user = new User("Ricardo", "Guevara", "@ricardo_guevarag");
console.log(user);

//Ejemplo utilizando Get y Set:

class Person {
  constructor(name, nickname) {
    this._name = name;
    this._nickname = nickname;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    return (this._name = newName);
  }
}

let person = new Person("Ricardo");
console.log(person.name);
