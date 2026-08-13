/* ==========================================
   M.A. CAMPAIGN WEBSITE
   darkmode.js
========================================== */

const darkModeBtn = document.getElementById("darkModeBtn");

const body = document.body;

/* ==========================================
   LOAD SAVED THEME
========================================== */

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark-mode");

    if (darkModeBtn) {

        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    }

}

/* ==========================================
   TOGGLE DARK MODE
========================================== */

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

}

/* ==========================================
   SYSTEM THEME (FIRST VISIT ONLY)
========================================== */

if (!localStorage.getItem("theme")) {

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

        body.classList.add("dark-mode");

        if (darkModeBtn) {

            darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        }

    }

}

/* ==========================================
   LISTEN FOR SYSTEM THEME CHANGES
========================================== */

window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change", (e) => {

    if (!localStorage.getItem("theme")) {

        if (e.matches) {

            body.classList.add("dark-mode");

            if (darkModeBtn) {

                darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';

            }

        } else {

            body.classList.remove("dark-mode");

            if (darkModeBtn) {

                darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';

            }

        }

    }

});

/* ==========================================
   END OF DARKMODE.JS
========================================== */
