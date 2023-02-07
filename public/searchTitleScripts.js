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
    let id = document.getElementById("userId").innerHTML;
    let title = document.getElementById("title").innerHTML;
    let year = document.getElementById("year").innerHTML;
    let director = document.getElementById("director").innerHTML;
    let runtime = document.getElementById("runtime").innerHTML;
    let genre = document.getElementById("genre").innerHTML;
    let img = document.getElementById("img").src;
    const data = {
      id: id,
      title: title,
      year: year,
      director: director,
      genre: genre,
      runtime: runtime,
      img: img
    }
    const postResponse = await addFavorite(data);
    console.log(postResponse);
  })
}