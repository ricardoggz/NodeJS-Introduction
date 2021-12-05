//manipulacion de arreglos con includes:
//esta función nos ayudará a determinar si existe algun elemento en especifico o que cumpla con una característica en específico, arrojándonos un operasdor lógico
let pets = ["cat", "dog", "rabbit"];
let pet = pets.includes("dog");
console.log(pet);

{
  let buscador = (paramtero) => {
    let clientes = [
      { name: "Ricardo", id: 1 },
      { name: "José", id: 1 },
      { name: "Fernando", id: 3 },
    ];
    return clientes.filter((cliente) => cliente.name.includes(paramtero));
  };

  console.log(buscador("f"));
}
