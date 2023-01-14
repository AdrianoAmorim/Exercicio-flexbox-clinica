var btnMenu = document.querySelector(".menuMobile");
var menu = document.querySelector("nav ul");
var abrirMenu = function () {
    if (menu.style.display == "flex") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
};
btnMenu.addEventListener("click", abrirMenu);
