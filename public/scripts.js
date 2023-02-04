console.log("SCRIPT lINKADO");

//SI METES ALGO EN ESTE SCRIPT RECUERDA QUE DEBES PONERLO DENTRO DE UN IF
//QUE ESPECIFIQUE PARA QUE VIEW SE VA A USAR SI NO ROMPERAS EL SCRIPT
//PARA EL RESTO DE PAGINAS


//despliegue del menu 'hamburguesa'
let burger = document.querySelector(".burger_menu");

burger.addEventListener("click", () => {
  let links = document.getElementById("links_menu");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});




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

if (document.getElementById("fav")) {
  let favButton = document.getElementById("fav");
  favButton.addEventListener('click', async (e) => {
    e.preventDefault;
    let title = document.getElementById("title").innerHTML;
    let year = document.getElementById("year").innerHTML;
    let director = document.getElementById("director").innerHTML;
    let runtime = document.getElementById("runtime").innerHTML;
    let genre = document.getElementById("genre").innerHTML;
    let img = document.getElementById("img").src;
    const data = {
      user: 6,
      title: title,
      year: year,
      director: director,
      genre: genre,
      runtime: runtime,
      img: img
    }
    console.log("data recogida del formulario", data)
    const postResponse = await addFavorite(data);
    console.log(postResponse);
  })
}


if (document.title === "CreateMovie" ) {

  document.getElementById("createMovie").addEventListener("click", async (req, res) => {
    const newMovie = req.body;
    try {
      let response = await new Movies(newMovie);
      let answer = await response.save();
      console.log("Respondiendo a la ruta POST MOVIES")
      res.status(201).json({
        msj: `New movie added to DB.`,
        movie: answer
      });
    } catch (err) {
      res.status(400).json({ msj: err.message })
    }
  })
}

if (document.title === "updateMovie" ) {


  form.addEventListener('click', (e)=>{
    e.preventDefault();
    const image = document.querySelector('#img').value
    const title = document.querySelector('#title').value
    const year = document.querySelector('#year').value
    const director = document.querySelector('#director').value
    const genre = document.querySelector('#genre').value
    const runtime= document.querySelector('#runtime').value
    const plot = document.querySelector('#plot').value
    const actors = document.querySelector('#actors').value
    const ratings = document.querySelector('#ratings').value
    const language = document.querySelector('#language').value
    const button =document.querySelector('#updateMovie')
    const formUpdate= document.querySelector(('#updateForm'))
    console.log(button)
    console.log(formUpdate)
  
  
    fetch(`https://localhost:3000/updateMovie/${title}`,
   
    {method:'PUT',
    headers:{
      'Content-Type': 'application-json',
    },
    body: JSON.stringify({
       image,title,year,director,genre,runtime,plot,actors,ratings,language
    })
  })
  
  
     console.log('ya estoy conecto con el front')
    })}
  
  
  
  
  
  
  