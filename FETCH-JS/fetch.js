const URL = "https://server-e-commerce-api.herokuapp.com/api/womanproducts";
const root = document.getElementById("root");
const buttonFetch = document.getElementById("btn-fetch");

//consumiendo la api con fetch
const getFetchData = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        root.innerHTML += `<ul><li>${item.title}</li></ul>`;
      });
    })
    .catch((error) => console.log(error));
};

//consumiendo la api con async await
async function getData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.map((item) => {
      root.innerHTML += `<ul><li>${item.title}</li></ul>`;
    });
  } catch (error) {
    return error;
  }
}

buttonFetch.addEventListener("click", getData);
