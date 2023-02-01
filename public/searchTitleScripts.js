import { addFavorite } from './utils/data.js';

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