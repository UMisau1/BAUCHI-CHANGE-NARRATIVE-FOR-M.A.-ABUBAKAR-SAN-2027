/* ==========================================
   M.A. CAMPAIGN WEBSITE V4.0
   AUTH.JS
   Admin Authentication System
========================================== */

"use strict";

/* ==========================================
   ADMIN CONFIGURATION
========================================== */

const ADMIN = {

    username: "m.a.admin",

    password: "M.A.@2027",

    fullname: "M.A. Situation Room Administrator"

};


/* ==========================================
   STORAGE KEYS
========================================== */

const AUTH_KEY = "m.a._admin_logged_in";

const USER_KEY = "m.a._admin_user";


/* ==========================================
   SAVE LOGIN SESSION
========================================== */

function saveSession() {

    localStorage.setItem(AUTH_KEY, "true");

    localStorage.setItem(USER_KEY, ADMIN.fullname);

}


/* ==========================================
   CLEAR LOGIN SESSION
========================================== */

function clearSession() {

    localStorage.removeItem(AUTH_KEY);

    localStorage.removeItem(USER_KEY);

}


/* ==========================================
   CHECK LOGIN STATUS
========================================== */

function isLoggedIn() {

    return localStorage.getItem(AUTH_KEY) === "true";

}


/* ==========================================
   GET CURRENT USER
========================================== */

function getCurrentUser() {

    return localStorage.getItem(USER_KEY);

}


/* ==========================================
   LOGIN AUTHENTICATION
========================================== */

function login(username, password) {

    username = username.trim();

    password = password.trim();

    if (
        username === ADMIN.username &&
        password === ADMIN.password
    ) {

        saveSession();

        return true;

    }

    return false;

}


/* ==========================================
   LOGOUT
========================================== */

function logout() {

    clearSession();

    window.location.href = "login.html";

}


/* ==========================================
   ROUTE PROTECTION
========================================== */

function protectPage() {

    if (!isLoggedIn()) {

        window.location.href = "login.html";

    }

}


/* ==========================================
   REDIRECT IF ALREADY LOGGED IN
========================================== */

function redirectIfLoggedIn() {

    if (isLoggedIn()) {

        window.location.href = "situation-room.html";

    }

}


/* ==========================================
   AUTO SESSION VALIDATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const protectedPages = [

        "situation-room.html"

    ];

    const currentPage = window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPage)) {

        protectPage();

    }

});


/* ==========================================
   DISPLAY CURRENT ADMIN
========================================== */

function displayCurrentUser() {

    const userElement = document.getElementById("currentUser");

    if (userElement && isLoggedIn()) {

        userElement.textContent = getCurrentUser();

    }

}

document.addEventListener("DOMContentLoaded", displayCurrentUser);


/* ==========================================
   AUTO LOGOUT AFTER INACTIVITY
========================================== */

let inactivityTimer;

function resetInactivityTimer() {

    clearTimeout(inactivityTimer);

    inactivityTimer = setTimeout(() => {

        if (isLoggedIn()) {

            alert("Session expired. Please login again.");

            logout();

        }

    }, 30 * 60 * 1000);

}

[
    "click",
    "mousemove",
    "keypress",
    "scroll",
    "touchstart"
].forEach(event => {

    window.addEventListener(event, resetInactivityTimer);

});

resetInactivityTimer();


/* ==========================================
   EXPORT AUTH METHODS
========================================== */

window.Auth = {

    login,

    logout,

    isLoggedIn,

    getCurrentUser,

    protectPage,

    redirectIfLoggedIn

};


/* ==========================================
   END OF AUTH.JS
========================================== */
