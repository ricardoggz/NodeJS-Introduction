//JavaScript Objects

let myObject = {
  Name: "example name",
  lastName: "example last name",
  age: 21,
};

console.log(myObject);
console.log(typeof myObject);

//objects destructuring:

let { Name, age } = myObject;
console.log(Name);
console.log(age);

//operador de miembor o acceso de propiedad:
//notación por punto:
let user = {
  username: "@ricardo_guevarag",
  id: 1,
  account: "premium",
};
console.log(user.username, user.id);

//notación por corchetes:
console.log(user['account'], user['username']);
