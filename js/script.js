let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav__links');
let navLinksA = document.querySelectorAll('.nav__links a');


hamburger.onclick = function () {
    hamburger.classList.toggle('hamburger_active');
    navLinks.classList.toggle('nav__links_active')
}



for (let i = 0; i < 4; i++) {
    navLinksA[i].onclick = function () {
        hamburger.classList.toggle('hamburger_active');
        navLinks.classList.toggle('nav__links_active');
    }
}


