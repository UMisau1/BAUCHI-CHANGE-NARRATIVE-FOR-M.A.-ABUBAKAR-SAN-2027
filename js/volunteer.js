/* ==========================================
   M.A. CAMPAIGN WEBSITE
   VOLUNTEER.JS
   VERSION 1.0
========================================== */


/* ==========================================
   COUNTER ANIMATION
========================================== */

function animateCounter(element, target){

    let start = 0;

    const speed = Math.ceil(target / 80);

    const timer = setInterval(() => {

        start += speed;

        if(start >= target){

            start = target;

            clearInterval(timer);

        }

        element.innerHTML = start;

    },20);

}

window.addEventListener("load",()=>{

    const counters=document.querySelectorAll(".stat-card h2");

    const values=[12,8,156,92];

    counters.forEach((counter,index)=>{

        animateCounter(counter,values[index]);

    });

});


/* ==========================================
   PROGRESS BAR
========================================== */

window.addEventListener("load",()=>{

    const progress=document.querySelector(".progress-bar");

    if(progress){

        progress.style.width="0%";

        setTimeout(()=>{

            progress.style.width="75%";

            progress.innerHTML="75%";

        },500);

    }

});


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        backToTop.style.display="flex";

    }else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================================
   DARK MODE
========================================== */

const darkModeBtn = document.getElementById("darkModeBtn");

if(darkModeBtn){

    darkModeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            darkModeBtn.innerHTML="☀️";

        }else{

            darkModeBtn.innerHTML="🌙";

        }

    });

}


/* ==========================================
   DASHBOARD CARD HOVER EFFECT
========================================== */

const dashboardCards=document.querySelectorAll(".dashboard-card");

dashboardCards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(.97)";

        setTimeout(()=>{

            card.style.transform="";

        },150);

    });

});


/* ==========================================
   CURRENT DATE
========================================== */

const today=new Date();

const options={

    weekday:"long",

    year:"numeric",

    month:"long",

    day:"numeric"

};

const dateElement=document.getElementById("currentDate");

if(dateElement){

    dateElement.innerHTML=today.toLocaleDateString("en-GB",options);

}


/* ==========================================
   LOADER
========================================== */

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        setTimeout(()=>{

            loader.classList.add("loader-hidden");

        },800);

    }

});
/* ==========================================
   AUTO GREETING
========================================== */

const greetingElement = document.getElementById("greeting");

if (greetingElement) {

    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {

        greeting = "Good Morning";

    } else if (hour < 17) {

        greeting = "Good Afternoon";

    } else {

        greeting = "Good Evening";

    }

    greetingElement.textContent = greeting + ", Volunteer!";

}


/* ==========================================
   TASK COMPLETION
========================================== */

const tasks = document.querySelectorAll(".task-box li");

tasks.forEach(task => {

    task.addEventListener("click", () => {

        task.classList.toggle("completed");

        localStorage.setItem("volunteerTasks", document.querySelector(".task-box").innerHTML);

    });

});

window.addEventListener("load", () => {

    const savedTasks = localStorage.getItem("volunteerTasks");

    if (savedTasks) {

        document.querySelector(".task-box").innerHTML = savedTasks;

    }

});


/* ==========================================
   LOGOUT CONFIRMATION
========================================== */

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", (e) => {

        e.preventDefault();

        if (confirm("Are you sure you want to logout?")) {

            window.location.href = "login.html";

        }

    });

}


/* ==========================================
   PAGE READY
========================================== */

window.addEventListener("load", () => {

    console.log("Volunteer Dashboard Loaded Successfully.");

});
