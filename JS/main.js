/* == Menu Show == */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", ()=>){
            nav.classList.toggle('show')
        }
    }
}

showMenu('nav-toggle','nav-menu')

// == Active and Remove menu ==
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navLink.forEach(n => )
}