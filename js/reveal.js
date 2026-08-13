/*=====================================
    SCROLL REVEAL
=====================================*/

const reveals = document.querySelectorAll(".reveal");

function revealCards(){

    reveals.forEach(function(card){

        const windowHeight = window.innerHeight;

        const revealTop = card.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            card.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealCards);

window.addEventListener("load", revealCards);
