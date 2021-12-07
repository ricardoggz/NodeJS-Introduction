//promesas en JavaScript
//las promesas nos ayudan a resolver los procesos asíncronos

const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          name: "Ricardo",
          lastName: "Guzmán",
        });
      }, 2000);
    } else {
      reject("No se obtuvieron los datos");
    }
  });
console.log("inicio");

//resolviendo la promesa con then y catch

getData(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("fin del proceso");
