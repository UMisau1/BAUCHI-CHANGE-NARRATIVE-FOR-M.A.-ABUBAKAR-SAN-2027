/* ==========================================
   M.A. CAMPAIGN MANAGEMENT SYSTEM
   DASHBOARD.JS
   VERSION 2.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       DASHBOARD DATA
    ========================================== */

    const dashboardData = {

        members: 25450,

        volunteers: 9860,

        lgas: 20,

        reports: 156

    };

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    function animateCounter(id, target) {

        const element = document.getElementById(id);

        if (!element) return;

        let current = 0;

        const increment = Math.ceil(target / 80);

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            element.textContent = current.toLocaleString();

        }, 20);

    }

    animateCounter("membersCount", dashboardData.members);

    animateCounter("volunteersCount", dashboardData.volunteers);

    animateCounter("lgasCount", dashboardData.lgas);

    animateCounter("reportsCount", dashboardData.reports);


    /* ==========================================
       MEMBERS CHART
    ========================================== */

    const membersChart = document.getElementById("membersChart");

    if (membersChart) {

        new Chart(membersChart, {

            type: "line",

            data: {

                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

                datasets: [{

                    label: "Members",

                    data: [5000, 9000, 13000, 17000, 21000, 25450],

                    borderWidth: 3,

                    fill: false,

                    tension: .4

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }


    /* ==========================================
       VOLUNTEERS CHART
    ========================================== */

    const volunteerChart = document.getElementById("volunteerChart");

    if (volunteerChart) {

        new Chart(volunteerChart, {

            type: "bar",

            data: {

                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

                datasets: [{

                    label: "Volunteers",

                    data: [1200, 2500, 4100, 6300, 8100, 9860],

                    borderWidth: 1

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false

            }

        });

    }


    /* ==========================================
       CURRENT DATE
    ========================================== */

    const currentDate = document.getElementById("currentDate");

    if (currentDate) {

        const today = new Date();

        currentDate.textContent = today.toDateString();

    }


    /* ==========================================
       NOTIFICATION MENU
    ========================================== */

    const notificationBtn = document.getElementById("notificationBtn");

    const notificationMenu = document.getElementById("notificationMenu");

    if (notificationBtn && notificationMenu) {

        notificationBtn.addEventListener("click", (e) => {

            e.stopPropagation();

            notificationMenu.classList.toggle("active");

        });

        document.addEventListener("click", () => {

            notificationMenu.classList.remove("active");

        });

        notificationMenu.addEventListener("click", (e) => {

            e.stopPropagation();

        });

    }


    /* ==========================================
       ACTIVE SIDEBAR
    ========================================== */

    const menuItems = document.querySelectorAll(".sidebar ul li");

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(menu => menu.classList.remove("active"));

            item.classList.add("active");

        });

    });


    /* ==========================================
       LOGOUT
    ========================================== */

    const logout = document.querySelector(".sidebar ul li:last-child");

    if (logout) {

        logout.addEventListener("click", () => {

            const answer = confirm("Are you sure you want to logout?");

            if (answer) {

                window.location.href = "login.html";

            }

        });

    }

});