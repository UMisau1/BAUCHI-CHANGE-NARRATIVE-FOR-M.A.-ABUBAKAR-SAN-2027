/* ==========================================
   M.A. CAMPAIGN WEBSITE
   REGISTER.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registrationForm");

    if (!form) return;

    form.addEventListener("submit", registerMember);

});

/* ==========================================
   REGISTER MEMBER
========================================== */

function registerMember(e){

    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const email = document.getElementById("email").value.trim();

    const state = document.getElementById("state").value;

    const lga = document.getElementById("lga").value;

    const ward = document.getElementById("ward").value;

    const pollingUnit = document.getElementById("pollingUnit").value;

    const photo = document.getElementById("passport")?.dataset.image || "";

    const memberID = generateMemberID();
const gender = document.getElementById("gender").value;

    const dob = document.getElementById("dob").value;

    const occupation = document.getElementById("occupation").value;

    const address = document.getElementById("address").value;

    const skills = document.getElementById("skills").value;

    const volunteer = document.getElementById("volunteer").checked;

    const member = {

        memberID,

        fullName,

        phone,

        email,

        gender,

        dob,

        occupation,

        state,

        lga,

        ward,

        pollingUnit,

        address,

        skills,

        volunteer,

        registrationDate:new Date().toLocaleDateString()

    };
    const photoInput = document.getElementById("photo");

let photo = "";

if (photoInput.files.length > 0) {

    const reader = new FileReader();

    reader.onload = function () {

        photo = reader.result;

        saveMember();

    };

    reader.readAsDataURL(photoInput.files[0]);

} else {

    saveMember();

}


    localStorage.setItem(

        "m.a.Member",

        JSON.stringify(member)

    );

    alert(

        "Registration Successful!\n\nYour Membership ID is:\n"+memberID

    );

    window.location.href="id-card.html";

}
/* ==========================================
   MEMBERSHIP ID GENERATOR
========================================== */

function generateMemberID(){

    let lastNumber=

        localStorage.getItem("lastMemberNumber");

    if(!lastNumber){

        lastNumber=1;

    }else{

        lastNumber=parseInt(lastNumber)+1;

    }

    localStorage.setItem(

        "lastMemberNumber",

        lastNumber

    );

    return "M.A. ABUBAKAR-2027-"+

    String(lastNumber).padStart(6,"0");

}
/* ==========================================
   REGISTRATION FORM
========================================== */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Collect Form Data
        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const state = document.getElementById("state").value;
        const lga = document.getElementById("lga").value;
        const ward = document.getElementById("ward").value;

        // Generate Membership Number
        const memberID =
            "M.A.-2027-" +
            Math.floor(100000 + Math.random() * 900000);

        // Save to Local Storage
        localStorage.setItem("m.a.Member", JSON.stringify({

            fullName,
            phone,
            email,
            state,
            lga,
            ward,
            memberID

        }));

        // Success Message
        alert("Registration Successful!");

        // Redirect to Membership Card
        window.location.href = "id-card.html";

    });

}
function saveMember() {

    const member = {

        fullName,
        phone,
        email,
        state,
        lga,
        ward,
        memberID,
        photo

    };

    localStorage.setItem(

        "m.a.Member",

        JSON.stringify(member)

    );

    alert("Registration Successful!");

    window.location.href = "id-card.html";

}
