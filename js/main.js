/* =========================================================
   M.A. ABUBAKAR CAMPAIGN 2027
   MAIN.JS
   Clean & Stable Version
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("loader-hidden");

            setTimeout(function () {

                if (loader) {
                    loader.remove();
                }

            }, 600);

        }, 300);

    }

});


/* =========================================================
   STICKY NAVBAR
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) return;


    /* -----------------------------------------------------
       HAMBURGER MENU
    ----------------------------------------------------- */

    menuToggle.addEventListener("click", function (event) {

        event.stopPropagation();

        const isOpen =
            navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );


        const icon =
            menuToggle.querySelector("i");

        if (icon) {

            if (isOpen) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");

                menuToggle.setAttribute(
                    "aria-label",
                    "Close Menu"
                );

            } else {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            }

        }

    });


    /* -----------------------------------------------------
       DROPDOWN MENUS
    ----------------------------------------------------- */

    const dropdownToggles =
        document.querySelectorAll(".dropdown-toggle");


    dropdownToggles.forEach(function (toggle) {

        toggle.addEventListener("click", function (event) {

            if (window.innerWidth <= 991) {

                event.preventDefault();
                event.stopPropagation();


                const dropdown =
                    toggle.closest(".dropdown");

                if (!dropdown) return;


                /* Close other dropdowns */

                document
                    .querySelectorAll(".dropdown.active")
                    .forEach(function (otherDropdown) {

                        if (otherDropdown !== dropdown) {

                            otherDropdown.classList.remove(
                                "active"
                            );

                        }

                    });


                /* Toggle current dropdown */

                dropdown.classList.toggle("active");

            }

        });

    });


    /* -----------------------------------------------------
       NORMAL LINKS
    ----------------------------------------------------- */

    const normalLinks =
        navMenu.querySelectorAll(
            ".dropdown-menu a, > li:not(.dropdown) > a"
        );


    normalLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 991) {

                closeMobileMenu();

            }

        });

    });


    /* -----------------------------------------------------
       CLOSE MENU FUNCTION
    ----------------------------------------------------- */

    function closeMobileMenu() {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        const icon =
            menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }


        document
            .querySelectorAll(".dropdown.active")
            .forEach(function (dropdown) {

                dropdown.classList.remove("active");

            });

    }


    /* -----------------------------------------------------
       CLICK OUTSIDE
    ----------------------------------------------------- */

    document.addEventListener("click", function (event) {

        if (window.innerWidth > 991) return;

        const navbarElement =
            document.querySelector(".navbar");

        if (!navbarElement) return;


        if (!navbarElement.contains(event.target)) {

            closeMobileMenu();

        }

    });


    /* -----------------------------------------------------
       RESET WHEN RETURNING TO DESKTOP
    ----------------------------------------------------- */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 991) {

            closeMobileMenu();

        }

    });

});


/* =========================================================
   BACK TO TOP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const backToTop =
        document.getElementById("backToTop");

    if (!backToTop) return;


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   DARK MODE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const darkModeBtn =
        document.getElementById("darkModeBtn");

    const darkModeIcon =
        document.getElementById("darkModeIcon");


    if (!darkModeBtn || !darkModeIcon) {

        console.warn("Dark Mode button not found.");

        return;

    }


    darkModeBtn.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        document.body.classList.toggle("dark-mode");


        const isDark =
            document.body.classList.contains("dark-mode");


        if (isDark) {

            darkModeIcon.textContent = "☀️";

            darkModeBtn.setAttribute(
                "aria-label",
                "Switch to Light Mode"
            );

            darkModeBtn.setAttribute(
                "title",
                "Light Mode"
            );

        } else {

            darkModeIcon.textContent = "🌙";

            darkModeBtn.setAttribute(
                "aria-label",
                "Switch to Dark Mode"
            );

            darkModeBtn.setAttribute(
                "title",
                "Dark Mode"
            );

        }

    });

});

/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const href =
                    this.getAttribute("href");


                if (!href || href === "#") {

                    return;

                }


                const target =
                    document.querySelector(href);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });


/* =========================================================
   ACTIVE SECTION NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


if (sections.length > 0) {

    window.addEventListener(
        "scroll",
        function () {

            let current = "";


            sections.forEach(function (section) {

                const sectionTop =
                    section.offsetTop - 120;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    current =
                        section.getAttribute("id");

                }

            });


            document
                .querySelectorAll(".nav-menu a")
                .forEach(function (link) {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute("href") ===
                        "#" + current
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

        }
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-title," +
        ".card," +
        ".news-card," +
        ".gallery-item," +
        ".event-card," +
        ".contact-card," +
        ".benefit-card"
    );


function revealOnScroll() {

    const trigger =
        window.innerHeight * 0.85;


    revealElements.forEach(function (element) {

        const top =
            element.getBoundingClientRect().top;


        if (top < trigger) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);

document.addEventListener(
    "DOMContentLoaded",
    revealOnScroll
);


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
    document.querySelectorAll("[data-counter]");


function startCounter(counter) {

    const target =
        parseInt(
            counter.getAttribute("data-counter"),
            10
        );


    if (isNaN(target)) return;


    const duration = 1500;

    const startTime =
        performance.now();


    function updateCounter(currentTime) {

        const elapsed =
            currentTime - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const currentValue =
            Math.floor(
                progress * target
            );


        counter.innerText =
            currentValue.toLocaleString();


        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        } else {

            counter.innerText =
                target.toLocaleString();

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}


if ("IntersectionObserver" in window) {

    const counterObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            startCounter(
                                entry.target
                            );


                            counterObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(function (counter) {

        counterObserver.observe(
            counter
        );

    });

} else {

    counters.forEach(function (counter) {

        startCounter(counter);

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.getElementById("currentYear");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   END OF MAIN.JS
========================================================= */