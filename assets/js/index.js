const menuheader = document.querySelector(".menu")
const nav_links = document.querySelector(".nav_links")

menuheader.addEventListener("click", ()=>{
    nav_links.classList.toggle('mobile-menu')
});