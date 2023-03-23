import { deleteFavMovie } from './utils/data.js';
console.log("SCRIPT LINKADO")

let burger = document.querySelector(".burger_menu");

burger.addEventListener("click", () => {
    let links = document.getElementById("links_menu");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
});

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