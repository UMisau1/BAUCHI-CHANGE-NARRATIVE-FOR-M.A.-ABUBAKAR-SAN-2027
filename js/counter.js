/* ==========================================
   M.A. CAMPAIGN WEBSITE
   counter.js
========================================== */


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counterItems = document.querySelectorAll(".counter");

const counterOptions = {

    threshold: 0.5

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, counterOptions);


/* ==========================================
   START OBSERVER
========================================== */

counterItems.forEach(counter => {

    counterObserver.observe(counter);

});


/* ==========================================
   ANIMATE COUNTER
========================================== */

function animateCounter(counter){

    const target = Number(counter.dataset.target);

    const duration = 2000;

    const stepTime = 16;

    const increment = target / (duration / stepTime);

    let current = 0;

    function update(){

        current += increment;

        if(current >= target){

            current = target;

        }

        counter.innerText = formatNumber(Math.floor(current));

        if(current < target){

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}


/* ==========================================
   FORMAT NUMBER
========================================== */

function formatNumber(number){

    return number.toLocaleString();

}


/* ==========================================
   OPTIONAL PLUS (+)
========================================== */

document.querySelectorAll(".counter-plus").forEach(counter=>{

    const target = Number(counter.dataset.target);

    const duration = 2000;

    let current = 0;

    function update(){

        current += target / 120;

        if(current >= target){

            current = target;

        }

        counter.innerHTML =

        formatNumber(Math.floor(current)) + "+";

        if(current < target){

            requestAnimationFrame(update);

        }

    }

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                update();

                observer.unobserve(entry.target);

            }

        });

    });

    observer.observe(counter);

});


/* ==========================================
   OPTIONAL PERCENTAGE
========================================== */

document.querySelectorAll(".counter-percent").forEach(counter=>{

    const target = Number(counter.dataset.target);

    let current = 0;

    function update(){

        current += target / 100;

        if(current >= target){

            current = target;

        }

        counter.innerHTML =

        Math.floor(current) + "%";

        if(current < target){

            requestAnimationFrame(update);

        }

    }

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                update();

                observer.unobserve(entry.target);

            }

        });

    });

    observer.observe(counter);

});


/* ==========================================
   OPTIONAL CURRENCY
========================================== */

document.querySelectorAll(".counter-money").forEach(counter=>{

    const target = Number(counter.dataset.target);

    let current = 0;

    function update(){

        current += target / 100;

        if(current >= target){

            current = target;

        }

        counter.innerHTML =

        "₦" + formatNumber(Math.floor(current));

        if(current < target){

            requestAnimationFrame(update);

        }

    }

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                update();

                observer.unobserve(entry.target);

            }

        });

    });

    observer.observe(counter);

});


/* ==========================================
   END OF COUNTER.JS
========================================== */
