/* ==========================================
   M.A. CAMPAIGN MANAGEMENT SYSTEM
   LOGIN.JS VERSION 2.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");
    const togglePassword = document.getElementById("togglePassword");
    const rememberCheckbox = document.querySelector(".remember-me input");
    const loginButton = document.querySelector(".login-btn");

    /* ==========================
       CHECK ELEMENTS
    ========================== */

    if (
        !loginForm ||
        !username ||
        !password ||
        !errorMessage ||
        !togglePassword ||
        !rememberCheckbox ||
        !loginButton
    ) {
        console.error("Login page elements not found.");
        return;
    }

    /* ==========================
       SHOW / HIDE PASSWORD
    ========================== */

    togglePassword.addEventListener("click", () => {

        const icon = togglePassword.querySelector("i");

        if (password.type === "password") {

            password.type = "text";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        } else {

            password.type = "password";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

        }

    });

    /* ==========================
       REMEMBER USERNAME
    ========================== */

    const savedUsername = localStorage.getItem("rememberUsername");

    if (savedUsername) {

        username.value = savedUsername;

        rememberCheckbox.checked = true;

    }

    /* ==========================
       LOGIN
    ========================== */

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        errorMessage.textContent = "";

        const user = username.value.trim();
        const pass = password.value.trim();

        if (user === "") {

            errorMessage.textContent = "Please enter your username.";

            username.focus();

            return;

        }

        if (pass === "") {

            errorMessage.textContent = "Please enter your password.";

            password.focus();

            return;

        }

        if (rememberCheckbox.checked) {

            localStorage.setItem("rememberUsername", user);

        } else {

            localStorage.removeItem("rememberUsername");

        }

        loginButton.disabled = true;

        loginButton.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Signing In...
        `;

        setTimeout(function () {

            if (user === "admin" && pass === "123456") {

                window.location.href = "dashboard.html";

            } else {

                errorMessage.textContent = "Invalid Username or Password.";

                loginButton.disabled = false;

                loginButton.innerHTML = `
                    <i class="fa-solid fa-right-to-bracket"></i>
                    Sign In
                `;

            }

        }, 1200);

    });

});