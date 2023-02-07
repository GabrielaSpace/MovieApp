import { addFavorite } from './utils/data.js';

let burger = document.querySelector(".burger_menu");

burger.addEventListener("click", () => {
  let links = document.getElementById("links_menu");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});

if (document.getElementById("fav")) {
  let favButton = document.getElementById("fav");
  favButton.addEventListener('click', async (e) => {
    e.preventDefault;
    let title = document.getElementById("title").innerHTML;
    console.log(title)
    let year = document.getElementById("year").innerHTML;
    console.log(year)
    let director = document.getElementById("director").innerHTML;
    console.log(director)
    let runtime = document.getElementById("runtime").innerHTML;
    console.log(runtime)
    let genre = document.getElementById("genre").innerHTML;
    console.log(genre)
    let img = document.getElementById("img").src;
    console.log(img)
    const data = {
      user: "id_prueba",
      title: title.slice(7,),
      year: year,
      director: director,
      genre: genre,
      runtime: runtime,
      img: img
    }
    console.log("data recogida del formulario", data)
    const postResponse = await addFavorite(data);
  })
}