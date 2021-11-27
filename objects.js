//JavaScript Objects

let myObject = {
    Name:'example name',
    lastName:'example last name',
    age:21
}

console.log(myObject);
console.log(typeof(myObject));

//objects destructuring:

let {Name, age} = myObject;
console.log(Name);
console.log(age);