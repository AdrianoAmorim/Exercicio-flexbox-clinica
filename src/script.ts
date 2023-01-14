const btnMenu = document.querySelector(".menuMobile") as HTMLDivElement;
const menu = document.querySelector("nav ul") as HTMLUListElement;

const abrirMenu = ():void =>{
    if(menu.style.display == "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex"; 
    }
}

btnMenu.addEventListener("click",abrirMenu);