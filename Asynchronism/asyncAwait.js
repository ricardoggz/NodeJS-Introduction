//resolver promesas con las palabras reservadas async & await:
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

const main = async () => {
  let resultado = await getData(false);
  console.log(resultado);
};

main();

//otro ejemplo:
const getUsers = (error) =>
  new Promise((res, rej) => {
    if (!error) {
      setTimeout(() => {
        res([
          { id: 3, name: "@ricardev", premium: false },
          { id: 10, name: "@fergacz", premium: true },
          { id: 33, name: "@ernestoggz", premium: true },
        ]);
      }, 3000);
    } else {
      rej("No se pudieron obtener los datos");
    }
  });

const showUsers = async () => {
  let users = await getUsers(false);
  console.log(users);
};
showUsers();

//concatenacion de promesas con async - await:
{
  const getMovies = (error) =>
    new Promise((res, rej) => {
      if (!error) {
        setTimeout(() => {
          res([
            { name: "fast & furious", id: 32 },
            { name: "avengers", id: 42 },
            { name: "spiderman", id: 50 },
          ]);
        }, 1000);
      } else {
        rej("no se pudieron obtener los datos");
      }
    });

  const getActors = (error) =>
    new Promise((res, rej) => {
      if (!error) {
        setTimeout(() => {
          res({ name: "tom holland", age: 23 });
        }, 1000);
      } else {
        rej("no se pudo obtener la información");
      }
    });

  //resolviendo la promesa con async - await & try - catch

  const main = async () => {
    try {
      let showMovies = await getMovies(false);
      let showActors = await getActors(false);
      console.log(showMovies);
      console.log(showActors);
    } catch (error) {
      console.log(error);
    }
  };
  main();
}
