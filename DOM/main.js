//MANIPULACION POR ID:
//Esta manipulacion del DOM solo me permite acceder a un único elemento del HTML:
var elementByID = document.getElementById("element-by-id");
var elementByClass = document.getElementsByClassName("element-by-class");
var array = [
    {name:"Hola"},
    {name:"desde un array "},
    {name:"en javascript"},
];
array.map((item)=>{
    elementByID.innerHTML+=`<ul><li>${item.name}</li></ul>`
 });