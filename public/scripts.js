// import { createMovie } from "../controllers/moviesMongoController";

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




// if (document.title === "CreateMovie" ) {



//   console.log("hola")

//   document.getElementById("createMovie").addEventListener("click", async (e) => {
//       console.log("Validacion arrancando");
//       e.preventDefault();
//       const form = document.querySelector(".createMovie").elements
//       const data = {}
//       for (let input of form) {
//           data[input.name] = input.value
//       }
//       console.log("data recogida del formulario", data)
//       //const postResponse = await editMovies(data);
//       await createMovie(data);

//   })

//   // document.getElementById("createMovie").addEventListener("click", async (req, res) => {
//   //   const newMovie = req.body;
//   //   try {
//   //     let response = await new Movies(newMovie);
//   //     let answer = await response.save();
//   //     console.log("Respondiendo a la ruta POST MOVIES")
//   //     res.status(201).json({
//   //       msj: `New movie added to DB.`,
//   //       movie: answer
//   //     });
//   //   } catch (err) {
//   //     res.status(400).json({ msj: err.message })
//   //   }
//   // })
// }

