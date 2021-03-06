//manipulación de arreglos con filter:
//filter no modifica el arreglo, filter arrojará un nuevo arreglo

let students = [
    { name: "Ricardo", age: 21, size: 1.71 },
    { name: "Fernando", age: 23, size: 1.76 },
    { name: "Ernesto", age: 15, size: 1.71 },
  ];
  
  const filtrado = students.filter(
    (student) => student.age > 20 && student.size > 1.71
  );
  console.log(filtrado);