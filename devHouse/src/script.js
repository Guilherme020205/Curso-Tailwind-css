const menuMobile = document.getElementById("menuMobile") 

function openMenu(){
    menuMobile.classList.remove("hidden")
    menuMobile.classList.add("flex")
}


function closeMenu(){
    menuMobile.classList.remove("flex")
    menuMobile.classList.add("hidden")
}