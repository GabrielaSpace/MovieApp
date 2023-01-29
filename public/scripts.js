// const { getMaxListeners } = require("process");
console.log("Probando")
let burger = document.getElementById("burger-button");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
});


const prueba = document.getElementById("prueba")

prueba.innerHTML = "SCRIPT LINKADO"



/* document.querySelector("form.signup").addEventListener("submit", function (event) {

  event.preventDefault(); //parar envío
  
  function verificarPasswords() {
    pass1 = document.getElementById('password1');
    pass2 = document.getElementById('password2');
    if (pass1.value != pass2.value) {
    document.getElementById("error").classList.add("mostrar");
    return false;
    } else {
        document.getElementById("login").disabled = true;
        return true;
    }
  
 */







document.querySelector("form.signup").addEventListener("submit", (event) => {

  event.preventDefault();// parar envío
  console.log("Validacion intentando funcionar")

  const email = event.target.email.value;
  const pass1 = event.target.password1.value;
  const pass2 = event.target.password2.value;

  console.log(email, pass1, pass2);

  let validated = true;



  const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/
  const regexEmail = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,3}/
  if (!email.includes("@")) {
    validated = false;
  }




  if (!regexPassword.test(pass1) && (pass1 !== pass2)) {
    validated = false;
  }

  if (!regexEmail.test(email)) {
    validated = false;
  }


  if (validated == false) {
    alert("Empty fields or fields not complete:" + "\n" +
      "Invalid email format." + "\n" +
      "The password must be between 6 and 16 characters." + "\n" +
      "Passwords did not match."
    );
  }
  // Comprobación final - Todo validado
  if (validated) {
    alert("Formulario enviado")
    event.target.submit();
    console.log("Validacion funcionando correctamente")
  }
})