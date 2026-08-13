/* ==========================================
   M.A. CAMPAIGN MANAGEMENT SYSTEM
   ADD MEMBER.JS
   VERSION 1.0
========================================== */

/* ==========================================
   SELECT ELEMENTS
========================================== */

const memberForm = document.getElementById("memberForm");
const memberId = document.getElementById("memberId");
const registrationDate = document.getElementById("registrationDate");
const photo = document.getElementById("photo");

/* ==========================================
   AUTO MEMBER ID
========================================== */

function generateMemberID(){

    let lastID = localStorage.getItem("lastMemberID");

    if(!lastID){

        lastID = 1;

    }else{

        lastID = Number(lastID) + 1;

    }

    localStorage.setItem("lastMemberID", lastID);

    memberId.value = "M.A. SAN" + String(lastID).padStart(6,"0");

}

generateMemberID();

/* ==========================================
   AUTO DATE
========================================== */

const today = new Date().toISOString().split("T")[0];

registrationDate.value = today;

/* ==========================================
   SAVE MEMBER TO LOCAL STORAGE
========================================== */

memberForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const member = {

        id: memberId.value,

        fullname: document.getElementById("fullname").value,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value,

        gender: document.getElementById("gender").value,

        lga: document.getElementById("lga").value,

        ward: document.getElementById("ward").value,

        status: document.getElementById("status").value

    };

    let members = JSON.parse(localStorage.getItem("members")) || [];

    members.push(member);

    localStorage.setItem("members", JSON.stringify(members));

    alert("Member Registered Successfully.");

    window.location.href = "members.html";

});