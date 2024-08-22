const btnMenu = document.querySelector("#menu");
const btnCerrarMenu = document.querySelector("#btnCerrarMenu");
const nav = document.querySelector("#nav");

btnMenu.addEventListener("click", ()=>{nav.classList.add("showNav")})
btnCerrarMenu.addEventListener("click", ()=>{nav.classList.remove("showNav")})