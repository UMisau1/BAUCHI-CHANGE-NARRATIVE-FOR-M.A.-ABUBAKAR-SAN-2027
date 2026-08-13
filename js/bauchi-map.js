const projects={

Misau:{

description:"Development priorities for Misau.",

list:[

"Modern Schools",

"Primary Healthcare",

"Rural Roads",

"Agriculture Support",

"Youth Empowerment"

]

}

};
Display Function
function showLGA(name){

const data=projects[name];

if(!data) return;

document.getElementById("lgaName").innerHTML=name;

document.getElementById("lgaDescription").innerHTML=data.description;

const list=document.getElementById("lgaProjects");

list.innerHTML="";

data.list.forEach(function(item){

list.innerHTML+=`<li>✅ ${item}</li>`;

});

}
const map = document.getElementById("bauchiMap");

map.addEventListener("load", function () {

    const svg = map.contentDocument;

    const misau = svg.getElementById("misau");

    if (misau) {

        misau.style.cursor = "pointer";

        misau.addEventListener("click", function () {

            showLGA("Misau");

        });

    }

});
misau.addEventListener("mouseover", function(){

    misau.style.fill="#FFD700";

});

misau.addEventListener("mouseout", function(){

    misau.style.fill="#00A651";

});
