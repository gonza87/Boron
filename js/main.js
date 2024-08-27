const btnMenu = document.querySelector("#menu");
const btnCerrarMenu = document.querySelector("#btnCerrarMenu");
const nav = document.querySelector("#nav");
const linksNav = document.querySelectorAll("#navList li a");


btnMenu.addEventListener("click", ()=>{nav.classList.add("showNav")});

btnCerrarMenu.addEventListener("click", ()=>{nav.classList.remove("showNav")});

linksNav.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("showNav")
    });
  });


