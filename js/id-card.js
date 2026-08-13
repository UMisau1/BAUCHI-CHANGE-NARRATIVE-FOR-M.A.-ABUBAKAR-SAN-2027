/* ==========================================
   M.A. CAMPAIGN
ID CARD
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const member = JSON.parse(localStorage.getItem("m.a.Member"));

    if (!member) {

        alert("No registration record found.");

        window.location.href = "register.html";

        return;

    }

    document.getElementById("memberName").textContent =
        member.fullName || "Member Name";

    document.getElementById("memberState").textContent =
        member.state || "Bauchi";

    document.getElementById("memberLGA").textContent =
        member.lga || "-";

    document.getElementById("memberWard").textContent =
        member.ward || "-";

    document.getElementById("memberID").textContent =
        member.memberID || generateMemberID();

    if(member.photo){

    document.getElementById("memberPhoto").src = member.photo;

}else{

    document.getElementById("memberPhoto").src =
    "images/default-user.png";

}

/* ==========================================
   MEMBERSHIP NUMBER
========================================== */

function generateMemberID() {

    const number = Math.floor(100000 + Math.random() * 900000);

    return "M.A.-2027-" + number;

}

/* ==========================================
   DOWNLOAD BUTTON
========================================== */

const downloadBtn = document.getElementById("downloadCard");

if (downloadBtn) {

    downloadBtn.addEventListener("click", () => {

        window.print();

    });

}