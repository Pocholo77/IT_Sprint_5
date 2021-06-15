const url = "https://icanhazdadjoke.com/";
const boton = document.getElementById("boton");

boton.addEventListener("click", function getJokes() {
  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke));
});
