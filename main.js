
function subMenuHandler(menuId){
    let menu = document.getElementById(menuId);
    if (menu.classList.contains("active")){
        menu.classList.remove("active");
    }else{
        menu.classList.add("active");
    }
}
function subHeaderMenuHandler(menuId){
    let menu = document.getElementById(menuId);
    if (menu.classList.contains("active-menu")){
        menu.classList.remove("active-menu");
    }else{
        menu.classList.add("active-menu");
    }
}