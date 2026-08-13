window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.classList.add("hide");

    }

});
theme.js
const body=document.body;

const themeToggle=document.querySelector(".theme-toggle");

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="dark"){

body.classList.add("dark-mode");

}

if(themeToggle){

themeToggle.addEventListener("click",()=>{

body.classList.toggle("dark-mode");

localStorage.setItem(

"theme",

body.classList.contains("dark-mode")

? "dark":"light"

);

});

}
