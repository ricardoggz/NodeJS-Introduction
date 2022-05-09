//this dentro de JavaScript queda asociado al valor del this en su scope (ámbito).
//Por ejemplo, en el caso del navegador sería en el objeto window y en caso de usar node js en el ámbito global.

//this en arrow functions:

const isWindow = () => this === global;
console.log(isWindow());

//en el caso de un método el objeto this sería el valor del ámbito de la función. por ejemplo:

{
    const counter = {
        number: 0,
        increment() {
            setInterval(() => console.log(++this.number), 1000);
        }
    }
    console.log(counter.increment()); //output: 1, 2, 3 ...
}

//en este otro caso el objeto this pierde la referencia del objeto counter, ya que no estamos utilizando arrow functions

{
    const counter = {
        number: 0,
        increment() {
            setInterval(function(){
                console.log(++this.number);
            }, 1000);
        }
    }

    let { increment } = counter;
    console.log(increment()); //output: NaN, NaN ...
}
