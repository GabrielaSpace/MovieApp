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

if (document.getElementById("fav")){
    let favButton = document.getElementById("fav");
    favButton.addEventListener('click', async (e) => {
      e.preventDefault;
      let movie = document.getElementById("title").innerHTML;
      
      const data = {
        user: 6,
        movie: movie.slice(7, )
      }
      console.log("data recogida del formulario", data)
      const postResponse = await addFavorite(data);
      console.log(postResponse);
    })
  }