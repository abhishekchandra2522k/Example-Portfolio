/* == Menu Show == */

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// == Active and Remove menu ==
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu Mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}

navLink.forEach(n => n.addEventListener('click',linkAction))

// == Scroll Reveal Animation ==

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 800,
    reset: true
})

// == Scroll Home ==

sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 100})
sr.reveal('.home__img',{delay: 200})
sr.reveal('.home__social',{interval: 100})

// == Scroll About == 

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 100})
sr.reveal('.about__text',{delay: 200})

// == Scroll Skills ==

sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 100})
sr.reveal('.skills__data',{interval: 100})
sr.reveal('.skills__img',{delay: 200})

// == Scroll Work ==
sr.reveal('.work__img',{})


// == Scroll Contact ==
sr.reveal('.contact__input',{})
