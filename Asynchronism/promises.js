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
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
console.log("fin del proceso");

//otro ejemplo:

{
  const getGames = (error) => {
    return new Promise((res, rej) => {
      if (!error) {
        setTimeout(() => {
          res([
            { name: "Fifa21", price: 200 },
            { name: "COD", price: 300 },
          ]);
        }, 2000);
      } else {
        rej("Proceso erróneo");
      }
    });
  };
  const showGames = getGames(false)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

//ejemplo con function

{
  function getCountrys(error) {
    return new Promise((res, rej) => {
      if (!error) {
        setTimeout(() => {
          res(
            [
              { name: "Guadalajara" },
              { name: "Ciudad de México" },
              { name: "Monterrey" },
              { name: "Querétaro" },
            ],
            2000
          );
        });
      } else {
        rej("proceso inválido, no se obtuvieron los datos");
      }
    });
  }
  getCountrys(false)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

//concatenacion de promesas:

{
  const getMovies = (error) =>
    new Promise((res, rej) => {
      if (!error) {
        setTimeout(() => {
          res([
            { name: "spiderman", id: 23 },
            { name: "avengers", id: 45 },
            { name: "forest gump", id: 54 },
          ]);
        }, 3000);
      } else {
        rej("no se pudieron obtener los datos");
      }
    });
  const getActors = (error) =>
    new Promise((res, rej) => {
      if (!error) {
        setTimeout(() => {
          res([
            { name: "tom holland", age: 23 },
            { name: "robert pattinson", age: 43 },
            { name: undefined, age: undefined },
          ]);
        }, 3000);
      }else{
        rej("no se pudieron obtener los datos");
      }
    });

  getMovies(false)
    .then((data) => {
      console.log(data);
      return getActors(true);//retornamos la segunda promesa
    })
    .then((data) => console.log(data))//aquí traemos la data de la segunda promesa
    .catch((error) => console.log(error));
}
