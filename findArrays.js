//manipulacion de arreglos con find y finfindex
//find nos retornará el primer elemento que coincida con la condición 
//findindex nos retornará el primer elemento que coincida con la condicion y  la posiciónen en la que se encuentra dentro de nuestro arreglo

{
  let clients = [
    { id: 2, name: "Ricardo" },
    { id: 4, name: "José" },
    { id: 5, name: "Ernesto" },
  ];

  let client = clients.find((client) => client.id === 2);
  console.log(client);
}

{
  let clients = [
    { id: 2, name: "Fulanito" },
    { id: 7, name: "José" },
    { id: 6, name: "Fernando" },
    { id: 2, name: "Ricardo" },
  ];

  let client = clients.findIndex((client) => client.id === 2);
  console.log(client);
}
