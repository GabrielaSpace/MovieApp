console.log("SCRIPT LINKADO");

//despliegue del menu 'hamburguesa'

if (document.title !== "Movies" && document
.title !== "updateMovie") {
  let burger = document.querySelector(".burger_menu");

  burger.addEventListener("click", () => {
    let links = document.getElementById("links_menu");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  });
}


//LLAMADAS A RUTAS DE ADMIN

//Ruta para crear pelicula en mongo:
const createMovie = async (movie) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    }
    console.log(options)
    const BASE_URL = 'http://localhost:3000/movies/createMovie'
    const response = await fetch(BASE_URL, options)
    if (response.status === 201) {
      alert("La pelicula " + movie.title + " ha sido creada");
    } else {
      alert("La pelicula " + movie.title + " no ha podido ser creada. Comprueba que el titulo no este ya en la coleccion de peliculas en /movies");
    }


  } catch (error) {
    alert(error)
  }
}

//Ruta para eliminar pelicula de mongo:
const deleteFavorite = async (title) => {
  try {
    const method = {
      method: 'DELETE'
    }
    const BASE_URL = 'http://localhost:3000/movies/deleteMovie?title=' + title
    const response = await fetch(BASE_URL, method)
    // const recharged = await fetch('http://localhost:3000/movies')
    if (response.status === 200) {
      alert("La pelicula " + title + " ha sido eliminada");
    } else {
      alert("La pelicula " + title + " no ha podido ser eliminada. Comprueba que hayas escrito bien el titulo.");
    }

  } catch (error) {
    alert(error)
    console.log(error)
  }

}
//Ruta para actualizar pelicula de mongo:
const updateMovie = async (movie) => {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    }
    const BASE_URL = 'http://localhost:3000/movies/updateMovie'
    const response = await fetch(BASE_URL, options)
    if (response.status === 201) {
      alert("La pelicula " + movie.title + " ha sido actualizada");
    } else {
      alert("La pelicula " + movie.title + " no ha podido ser actualizada. Comprueba que hayas escrito bien el titulo.");
    }

  } catch (error) {
    alert(error)
    console.log(error)
  }

}

//LLAMADAS A RUTAS DE USUARIO

//Ruta para añadir pelicula a favoritos: 
const addFavorite = async (movie) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    }
    console.log(options)
    const BASE_URL = 'http://localhost:3000/favMovies'
    console.log(BASE_URL)
    const response = await fetch(BASE_URL, options)
    if (response.status === 201) {
      alert("La pelicula " + movie.title + " ha sido añadida a favoritos");
    } else {
      alert("La pelicula " + movie.title + " no ha podido ser añadida. Comprueba que el titulo no este ya en la coleccion de peliculas en /favmovies");
    }

  } catch (error) {
    alert(error)
  }
}
//Ruta para eliminar pelicula de favoritos:
const deleteFavMovie = async (data) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    console.log(data)

    const BASE_URL = 'http://localhost:3000/favmovies'
    // const BASE_URL = `http://localhost:3000/favmovies?title=${data.title}&userId=${data.user}`
    console.log(BASE_URL)
    const response = await fetch(BASE_URL, options)
    console.log(response)
    if (response.status === 200) {
      alert("La pelicula " + data.title + " ha sido eliminada de tu lista de favoritos");
    } else {
      alert("La pelicula " + data.title + " no ha podido ser eliminada. Es probable que ya la hayas eliminado refresca tu pagina.");
    }


  } catch (error) {
    alert(error)
    console.log(error)
  }

}


//Eventos para capturar los datos de los formularios

if (document.title === "singup") {
  //validacion de la contraseña y el usuario cuando se registra:
  document.querySelector("form.signup").addEventListener("submit", (event) => {
    event.preventDefault(); // parar envío
    console.log("Validacion arrancando");

    const email = event.target.emailSignup.value;
    const pass1 = event.target.passwordSignup.value;
    const pass2 = event.target.password2Signup.value;

    console.log(email, pass1, pass2);

    let validated = true;
    // Expresiones regulares para constreñir password, y user
    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;
    const regexEmail = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,3}/;


    if (regexPassword.test(pass1) && pass1 !== pass2) {
      validated = false;
    }

    if (regexEmail.test(email)) {
      validated = false;
    }

    if (validated == false) {
      alert(
        "Empty fields or fields not complete:" +
        "\n" +
        "Invalid email format." +
        "\n" +
        "The password must be between 6 and 16 characters." +
        "\n" +
        "Passwords did not match."
      );
    }
    // Comprobación final - Todo validado
    if (validated) {
      alert("Formulario enviado");
      event.target.submit();
      console.log("Validacion funcionando correctamente");
    }
  });
}

//Evento para capturar los datos y llamar a la funcion para actualizar pelicula a lista de mongo a traves de admin:
if (document.title === "updateMovie") {

  document.getElementById("updateMovie").addEventListener("click", async (e) => {
    console.log("Validacion arrancando");
    e.preventDefault();
    const form = document.querySelector(".updateMovie").elements
    const data = {}
    for (let input of form) {
      data[input.name] = input.value
    }
    console.log("data recogida del formulario", data)
    //const postResponse = await editMovies(data);
    await updateMovie(data);

  })
}
//Evento para capturar los datos y llamar a la funcion para eliminar pelicula a lista de mongo a traves de admin:
if (document.title === "Movies") {
  const buttons = document.getElementsByClassName("delete")
  console.log(buttons)
  for (let i = 0; i < buttons.length; i++) {

    document.getElementById(`delete${i}`).addEventListener('click', async (e) => {
      e.preventDefault;
      let movie = document.getElementById(`title${i}`).innerHTML;
      console.log("Este es valor de h3:" + movie)
      const cleanTitle = movie.slice(7,)
      const titleMovie = cleanTitle.trim()
      console.log("Este es el valor que se le pasa a la query", titleMovie)
      if (movie) {
        const deleteResponse = await deleteFavorite(titleMovie);
        console.log(deleteResponse)
      }
    })
  }
}
//Evento para capturar los datos y llamar a la funcion para crear pelicula a lista de mongo a traves de admin:
if (document.title === "CreateMovie") {

  console.log("hola")

  document.getElementById("createMovie").addEventListener("click", async (e) => {
    console.log("Validacion arrancando");
    e.preventDefault();
    const form = document.querySelector(".createMovie").elements
    const data = {}
    for (let input of form) {
      data[input.name] = input.value
    }
    console.log("data recogida del formulario", data)
    //const postResponse = await editMovies(data);
    await createMovie(data);

  })

}
//Evento para capturar los datos y llamar a la funcion para añadir pelicula favorita de la lista de un usuario:

if (document.title === "searchTitle") {
  let favButton = document.getElementById("fav");
  favButton.addEventListener('click', async (e) => {
    console.log("evento arrancando")
    e.preventDefault();
    let id = document.getElementById("userId").innerHTML;
    console.log(id)
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
      user: id.trim(),
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

//Evento para capturar los datos y llamar a la funcion para eliminar pelicula favorita de la lista de un usuario:

if (document.title === "Favorites") {
  const buttons = document.getElementsByClassName("delete")
  console.log(buttons.length)
  for (let i = 0; i < buttons.length; i++) {
    let deleteButton = document.getElementById(`delete${i}`);
    deleteButton.addEventListener('click', async (e) => {
      console.log("COMENZANDO EVENTO BOTON REMOVE");
      e.preventDefault;
      let id = document.getElementById("userId").innerHTML;
      console.log(id)
      let title = document.getElementById(`title${i}`).innerHTML;
      console.log(title)
      const data = {
        user: id.trim(),
        title: title.slice(7,)

      }
      console.log("data recogida del formulario", data)
      const postResponse = await deleteFavMovie(data);
    })
  }
}
