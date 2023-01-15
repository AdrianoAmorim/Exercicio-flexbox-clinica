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
window.addEventListener("resize", function () {
    if (window.innerWidth > 740) {
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
});
