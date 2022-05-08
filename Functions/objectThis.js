//this dentro de JavaScript queda asociado al valor del this en su scope (ámbito).
//Por ejemplo, en el caso del navegador sería en el objeto window y en caso de usar node js en el ámbito global.

//this en arrow functions:

const isWindow = () => this === global;
console.log(isWindow());
