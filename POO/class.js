/*
  Programación orentada a objetos en JavaScript mediante el uso 
  de las clases para crear nuevos objetos.
  Utilizaremos la siguiente clase para crear nuevos objetos y 
  acceder a los atributos y métodos:
*/

class Movie  {
  //El constructor es la función que tendrá nuestros atributos
  constructor(title, year, category){ 
    this.title = title;
    this.year = year;
    this.category = category;
  }
};

//Creando un nuevo objeto a partir la clase Movie:
const AVENGERS = new Movie(
  "End Game",
  2021,
  "Fiction"
);/*Le pasamos los parámetros al constructor y así
    podemos crear nuevos objetos, utilizando el
    principio del encapsulamiento.
  */
console.log(AVENGERS);