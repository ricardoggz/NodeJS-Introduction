//javascript ejecuta todo su código en un solo proceso
//para eso se usa el asincronismo
//event loop
//event queque

//ejemplo:
{
  console.log("tarea_1");
  console.log("tarea_2");
  console.log("tarea_3");

  setTimeout(() => {
    console.log("tarea_4");
  }, 1000);

  console.log("tarea_5");
}

//callbacks:
//son funciones que se ejecutan dentro de otra:
//primero se ejecuta la funcion padre, después la funcion que se le paso como parápametro:

{
  const suma = (a, b, cb) => {
    cb(a + b);
  };

  suma(1, 2, (resultado) => {
    console.log(resultado);
  });
}

//
{
  const getData = (cb) => {
    setTimeout(() => {
      cb({
        name: "Carolina",
        apellido: "Salazar",
      });
    }, 1000);
  };
  const showData = (data) => console.log(data);
  getData(showData);
}
