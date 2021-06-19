const urlJoke = "https://icanhazdadjoke.com/";
const urlWeather = 'https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019';

const boton = document.getElementById("boton");

function clima (){
  fetch(urlWeather , {
    headers: {
      'Accept': 'application/json'
     }
  })
    .then( response => response.json())
    .then( data => document.getElementById("tiempo").innerHTML = data.stateSky.description)
}

boton.addEventListener("click", function getJokes() {
  fetch(urlJoke, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) =>  document.getElementById('results').innerHTML = data.joke );
});

clima();  // Preguntar : Asi esta bien o deberia utilizar un eventlistener(load)??