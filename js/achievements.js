/* =========================================================
   M.A. CAMPAIGN WEBSITE
   ACHIEVEMENTS PAGE
   Legislative Laws Renderer
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const lawsGrid = document.getElementById("legislativeLawsGrid");
    const yearFilter = document.getElementById("lawYearFilter");
    const categoryFilter = document.getElementById("lawCategoryFilter");
    const searchInput = document.getElementById("lawSearch");

    const totalLaws = document.getElementById("totalLaws");
    const totalCategories = document.getElementById("totalCategories");


    /* =====================================================
       CHECK DATABASE
    ===================================================== */

    if (!lawsGrid) {
        return;
    }

    if (
        typeof window.legislativeLaws === "undefined" ||
        !Array.isArray(window.legislativeLaws)
    ) {

        lawsGrid.innerHTML = `
            <div class="legislative-empty">
                <h3>Legislative data unavailable</h3>
                <p>
                    The legislative database could not be loaded.
                </p>
            </div>
        `;

        return;
    }


    /* =====================================================
       DATABASE
    ===================================================== */

    const laws = window.legislativeLaws;
    /* =====================================================
   DATABASE
===================================================== */

const laws = window.legislativeLaws;


/* =====================================================
   LEGISLATIVE TOTAL — ACHIEVEMENTS STAT
===================================================== */

const legislativeTotalLaws =
    document.getElementById("legislativeTotalLaws");

if (legislativeTotalLaws) {
    legislativeTotalLaws.textContent = laws.length;
}

    /* =====================================================
       TOTAL LAWS
    ===================================================== */

    if (totalLaws) {
        totalLaws.textContent = laws.length;
    }


    /* =====================================================
       UNIQUE CATEGORIES
    ===================================================== */

    const categories = [
        ...new Set(
            laws
                .map(law => law.category)
                .filter(Boolean)
        )
    ].sort();


    if (totalCategories) {
        totalCategories.textContent = categories.length;
    }


    /* =====================================================
       CATEGORY FILTER
    ===================================================== */

    if (categoryFilter) {

        categories.forEach(category => {

            const option = document.createElement("option");

            option.value = category;
            option.textContent = category;

            categoryFilter.appendChild(option);

        });

    }


    /* =====================================================
       RENDER LAWS
    ===================================================== */

    function renderLaws(data) {

        lawsGrid.innerHTML = "";


        /* =================================================
           EMPTY RESULT
        ================================================= */

        if (!data.length) {

            lawsGrid.innerHTML = `
                <div class="legislative-empty">

                    <div class="empty-icon">
                        ⚖️
                    </div>

                    <h3>No legislation found</h3>

                    <p>
                        Try changing your search or filter.
                    </p>

                </div>
            `;

            return;
        }


        /* =================================================
           CREATE CARDS
        ================================================= */

        data.forEach(law => {

            const card = document.createElement("article");

            card.className = "legislative-law-card";


            /* =============================================
               STATUS CLASS
            ============================================= */

            let statusClass = "status-recorded";

            if (
                law.status &&
                law.status.toLowerCase().includes("verification")
            ) {
                statusClass = "status-verification";
            }


            /* =============================================
               CARD
            ============================================= */

            card.innerHTML = `

                <div class="law-card-top">

                    <span class="law-number">
                        LAW NO. ${law.lawNo}
                    </span>

                    <span class="law-year">
                        ${law.year}
                    </span>

                </div>


                <div class="law-card-content">

                    <span class="law-category">
                        ${law.category}
                    </span>

                    <h3>
                        ${law.title}
                    </h3>

                </div>


                <div class="law-card-footer">

                    <span class="law-status ${statusClass}">
                        ${law.status}
                    </span>

                </div>

            `;


            lawsGrid.appendChild(card);

        });

    }


    /* =====================================================
       FILTER FUNCTION
    ===================================================== */

    function filterLaws() {

        const selectedYear =
            yearFilter
                ? yearFilter.value
                : "all";


        const selectedCategory =
            categoryFilter
                ? categoryFilter.value
                : "all";


        const searchTerm =
            searchInput
                ? searchInput.value.trim().toLowerCase()
                : "";


        const filtered = laws.filter(law => {

            /* =============================================
               YEAR
            ============================================= */

            const yearMatch =
                selectedYear === "all" ||
                String(law.year) === selectedYear;


            /* =============================================
               CATEGORY
            ============================================= */

            const categoryMatch =
                selectedCategory === "all" ||
                law.category === selectedCategory;


            /* =============================================
               SEARCH
            ============================================= */

            const searchMatch =
                !searchTerm ||

                String(law.lawNo)
                    .toLowerCase()
                    .includes(searchTerm) ||

                String(law.year)
                    .toLowerCase()
                    .includes(searchTerm) ||

                law.category
                    .toLowerCase()
                    .includes(searchTerm) ||

                law.title
                    .toLowerCase()
                    .includes(searchTerm);


            return (
                yearMatch &&
                categoryMatch &&
                searchMatch
            );

        });


        renderLaws(filtered);

    }


    /* =====================================================
       EVENTS
    ===================================================== */

    if (yearFilter) {

        yearFilter.addEventListener(
            "change",
            filterLaws
        );

    }


    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            filterLaws
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterLaws
        );

    }


    /* =====================================================
       INITIAL RENDER
    ===================================================== */

    renderLaws(laws);

});

/* =========================================================
   ACHIEVEMENTS PAGE
   achievements.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealItems = document.querySelectorAll(
        ".environmental-detail-card, " +
        ".achievement-item, " +
        ".achievement-highlight, " +
        ".dereservation-card, " +
        ".rural-grid article, " +
        ".governance-card, " +
        ".legislative-card, " +
        ".executive-card, " +
        ".future-card"
    );


    revealItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(25px)";
        item.style.transition =
            "opacity .6s ease, transform .6s ease";

    });


    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealItems.forEach(item => {
        revealObserver.observe(item);
    });


    /* =====================================================
       NUMBER COUNTERS
    ===================================================== */

    const counters = document.querySelectorAll(
        "[data-count]"
    );


    function animateCounter(element) {

        const target = Number(
            element.getAttribute("data-count")
        );

        if (isNaN(target)) return;

        let current = 0;

        const duration = 1500;

        const startTime = performance.now();


        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(
                elapsed / duration,
                1
            );

            const eased =
                1 - Math.pow(1 - progress, 3);

            current = Math.floor(
                target * eased
            );

            element.textContent =
                current.toLocaleString();

            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                element.textContent =
                    target.toLocaleString();

            }

        }

        requestAnimationFrame(updateCounter);
    }


    if (counters.length) {

        const counterObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting)
                            return;

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.5
                }
            );


        counters.forEach(counter => {
            counterObserver.observe(counter);
        });

    }


    /* =====================================================
       ACTIVE SECTION
    ===================================================== */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    const id =
                        entry.target.getAttribute("id");

                    navigationLinks.forEach(link => {

                        link.classList.remove(
                            "section-active"
                        );

                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {

                            link.classList.add(
                                "section-active"
                            );

                        }

                    });

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* =====================================================
       EXTERNAL IMAGE ERROR PROTECTION
    ===================================================== */

    document.querySelectorAll(
        ".project-image img"
    ).forEach(image => {

        image.addEventListener(
            "error",
            function () {

                this.style.display = "none";

                const parent =
                    this.parentElement;

                if (parent) {

                    parent.classList.add(
                        "image-missing"
                    );

                }

            }
        );

    });


    /* =====================================================
       PAGE READY
    ===================================================== */

    document.body.classList.add(
        "achievements-page-ready"
    );

});
/* =========================================================
   ACHIEVEMENTS - SECTION NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const sectionLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    sectionLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header = document.querySelector(".site-header");

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight -
                15;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });

});
/* =========================================================
   ACHIEVEMENTS.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       INTERSECTION ANIMATION
    ===================================================== */

    const animatedElements = document.querySelectorAll(
        ".achievement-category-card, " +
        ".project-card, " +
        ".environmental-detail-card, " +
        ".rural-grid article, " +
        ".governance-card, " +
        ".legislative-card, " +
        ".future-card, " +
        ".executive-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("achievement-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        animatedElements.forEach(element => {
            element.classList.add("achievement-hidden");
            observer.observe(element);
        });

    }


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    document.querySelectorAll(".project-image img").forEach(img => {

        img.addEventListener("error", function () {

            this.style.display = "none";

            const parent = this.closest(".project-image");

            if (parent) {
                parent.classList.add("image-missing");
            }

        });

    });


    /* =====================================================
       ACTIVE SECTION
    ===================================================== */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const categoryLinks = document.querySelectorAll(
        '.achievement-category-card[href^="#"]'
    );

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const id = entry.target.id;

                    categoryLinks.forEach(link => {

                        link.classList.toggle(
                            "section-active",
                            link.getAttribute("href") === "#" + id
                        );

                    });

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

    }

});


/* =========================================================
   ACHIEVEMENT ANIMATION CSS
========================================================= */

const achievementAnimationStyle = document.createElement("style");

achievementAnimationStyle.textContent = `

.achievement-hidden {
    opacity: 0;
    transform: translateY(25px);
    transition:
        opacity .6s ease,
        transform .6s ease;
}

.achievement-visible {
    opacity: 1;
    transform: translateY(0);
}

.achievement-category-card.section-active {
    border-color: var(--ach-primary);
}

.image-missing {
    background:
        linear-gradient(
            135deg,
            #0b6b3a,
            #064c2a
        );
}

.image-missing::after {
    content: "Project Image";
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
}
`;

document.head.appendChild(achievementAnimationStyle);
/* =========================================================
   ACHIEVEMENTS PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".environmental-detail-card, " +
        ".dereservation-card, " +
        ".rural-grid article, " +
        ".governance-card, " +
        ".legislative-card, " +
        ".future-card, " +
        ".project-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("achievement-visible");

                        obs.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {

            element.classList.add("achievement-reveal");

            observer.observe(element);

        });

    }


    /* =====================================================
       LEGISLATIVE STATISTICS
    ===================================================== */

    const lawCount = document.getElementById("legislativeLawCount");

    if (lawCount) {

        const target = parseInt(lawCount.textContent, 10);

        if (!isNaN(target)) {

            animateNumber(lawCount, target);

        }

    }


    /* =====================================================
       FUTURE CARD HOVER ACCESSIBILITY
    ===================================================== */

    document.querySelectorAll(".future-card").forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("future-active");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("future-active");
        });

    });

});


/* =========================================================
   NUMBER ANIMATION
========================================================= */

function animateNumber(element, target) {

    let current = 0;

    const duration = 1200;

    const startTime = performance.now();

    function update(currentTime) {

        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        current = Math.floor(progress * target);

        element.textContent = current;

        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            element.textContent = target;

        }

    }

    requestAnimationFrame(update);
}