/* ==========================================
   M.A. CAMPAIGN WEBSITE V4.0
   SITUATION-ROOM.JS
========================================== */

"use strict";

/* ==========================================
   PROTECT PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    Auth.protectPage();

});


/* ==========================================
   DASHBOARD ELEMENTS
========================================== */

const totalMembers = document.getElementById("totalMembers");

const totalVolunteers = document.getElementById("totalVolunteers");

const totalLGAs = document.getElementById("totalLGAs");

const totalWards = document.getElementById("totalWards");

const totalUnits = document.getElementById("totalUnits");

const lastUpdate = document.getElementById("lastUpdate");


/* ==========================================
   DEFAULT DASHBOARD DATA
========================================== */

const dashboardData = {

    members: 50000,

    volunteers: 10000,

    lgas: 20,

    wards: 323,

    pollingUnits: 5004

};


/* ==========================================
   UPDATE DASHBOARD
========================================== */

function updateDashboard() {

    if (totalMembers) {

        totalMembers.textContent =
            dashboardData.members.toLocaleString();

    }

    if (totalVolunteers) {

        totalVolunteers.textContent =
            dashboardData.volunteers.toLocaleString();

    }

    if (totalLGAs) {

        totalLGAs.textContent =
            dashboardData.lgas;

    }

    if (totalWards) {

        totalWards.textContent =
            dashboardData.wards;

    }

    if (totalUnits) {

        totalUnits.textContent =
            dashboardData.pollingUnits.toLocaleString();

    }

    if (lastUpdate) {

        lastUpdate.textContent =
            new Date().toLocaleString();

    }

}


/* ==========================================
   INITIALIZE DASHBOARD
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    updateDashboard();

});
/* ==========================================
   SEARCH & FILTER
========================================== */

const searchInput = document.getElementById("searchInput");

const statusFilter = document.getElementById("statusFilter");

const membersTable = document.getElementById("membersTable");


/* ==========================================
   FILTER TABLE
========================================== */

function filterTable() {

    if (!membersTable) return;

    const rows = membersTable.querySelectorAll("tbody tr");

    const searchValue = searchInput
        ? searchInput.value.toLowerCase()
        : "";

    const statusValue = statusFilter
        ? statusFilter.value.toLowerCase()
        : "";

    rows.forEach(row => {

        const text = row.textContent.toLowerCase();

        const statusCell = row.querySelector(".status");

        const status = statusCell
            ? statusCell.textContent.toLowerCase()
            : "";

        const searchMatch = text.includes(searchValue);

        const statusMatch =
            statusValue === "" ||
            status === statusValue;

        row.style.display =
            (searchMatch && statusMatch)
                ? ""
                : "none";

    });

}


if (searchInput) {

    searchInput.addEventListener("keyup", filterTable);

}

if (statusFilter) {

    statusFilter.addEventListener("change", filterTable);

}


/* ==========================================
   LIVE TABLE COUNT
========================================== */

function updateVisibleRows() {

    if (!membersTable) return;

    const visibleRows = [...membersTable.querySelectorAll("tbody tr")]

        .filter(row => row.style.display !== "none");

    const visibleCount = document.getElementById("visibleCount");

    if (visibleCount) {

        visibleCount.textContent = visibleRows.length;

    }

}

if (searchInput) {

    searchInput.addEventListener("keyup", updateVisibleRows);

}

if (statusFilter) {

    statusFilter.addEventListener("change", updateVisibleRows);

}


/* ==========================================
   AUTO REFRESH LAST UPDATE
========================================== */

setInterval(() => {

    if (lastUpdate) {

        lastUpdate.textContent =
            new Date().toLocaleString();

    }

}, 60000);
/* ==========================================
   EXPORT TABLE TO CSV
========================================== */

const exportBtn = document.getElementById("exportCSV");

if (exportBtn) {

    exportBtn.addEventListener("click", exportTableToCSV);

}

function exportTableToCSV() {

    if (!membersTable) return;

    let csv = [];

    const rows = membersTable.querySelectorAll("tr");

    rows.forEach(row => {

        let cols = row.querySelectorAll("th, td");

        let rowData = [];

        cols.forEach(col => {

            rowData.push(
                '"' + col.innerText.replace(/"/g, '""') + '"'
            );

        });

        csv.push(rowData.join(","));

    });

    const csvFile = new Blob([csv.join("\n")], {

        type: "text/csv"

    });

    const downloadLink = document.createElement("a");

    downloadLink.download =
        "M.A.-members-report.csv";

    downloadLink.href =
        window.URL.createObjectURL(csvFile);

    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);

}


/* ==========================================
   PRINT REPORT
========================================== */

const printBtn = document.getElementById("printReport");

if (printBtn) {

    printBtn.addEventListener("click", () => {

        window.print();

    });

}


/* ==========================================
   ADMIN LOGOUT
========================================== */

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout = confirm(

            "Are you sure you want to logout?"

        );

        if (confirmLogout) {

            Auth.logout();

        }

    });

}


/* ==========================================
   AUTO REFRESH DASHBOARD
========================================== */

setInterval(() => {

    updateDashboard();

}, 300000); // Every 5 Minutes


/* ==========================================
   PAGE READY
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log(

        "M.A. Abubakar, SAN, Situation Room Dashboard Loaded Successfully."

    );

});


/* ==========================================
   END OF SITUATION-ROOM.JS
========================================== */
