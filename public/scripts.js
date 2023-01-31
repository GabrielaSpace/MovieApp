import { addFavorite } from './utils/data.js';

console.log("Probando");

//despliegue del menu 'hambuguesa'
let burger = document.getElementById("burger_button");

burger.addEventListener("click", () => { 
  let links = document.getElementById("links_menu");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});
if(document.title === "Movies") {
const buttons = document.getElementsByTagName("button")
console.log(buttons)


for (let i = 0; i < buttons.length; i++) {
  const boton = document.getElementById(`edit${i}`)
  boton.addEventListener('click', () => {
    console.log(boton)
  })
}

if(document.title === "CreateMovie" ) {
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
} )
}



}


if(document.title === "singup") {
  //validacion de la contraseña y el usuario cuando se registra:
document.querySelector("form.signup").addEventListener("submit", (event) => {
  event.preventDefault(); // parar envío
  console.log("Validacion arrancando");

  const email = event.target.emailSignup.value;
  const pass1 = event.target.passwordSignup.value;
  const pass2 = event.target.password2Signup.value;

  console.log(email, pass1, pass2);

  let validated = true;
  // Expresiones regulares para contreñir password, y user
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
