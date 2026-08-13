/* ==========================================
   SIDEBAR TOGGLE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    if (!menuToggle || !sidebar || !mainContent) return;

    menuToggle.addEventListener("click", () => {

        sidebar.classList.toggle("collapsed");

        mainContent.classList.toggle("expanded");

    });

});
