// const { getMaxListeners } = require("process");
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

