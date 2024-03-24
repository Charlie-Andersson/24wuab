function espresso() {
    window.location.replace("http://127.0.0.1:5500/produkt1.html");
}
function matcha() {
    window.location.replace("http://127.0.0.1:5500/produkt2.html");
}
function latte() {
    window.location.replace("http://127.0.0.1:5500/produkt2.html");
}


let button = document.querySelector(".menu-button");
button.addEventListener("click",showMenu)

let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",showMenu)

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");
    
    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}