/* =========================================================
   LEGISLATIVE RECORD UI
   MAKAMA BABBA CAMPAIGN WEBSITE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const lawsGrid = document.getElementById("legislativeLawsGrid");
    const yearFilter = document.getElementById("lawYearFilter");
    const categoryFilter = document.getElementById("lawCategoryFilter");
    const searchInput = document.getElementById("lawSearch");

    const totalLaws = document.getElementById("totalLaws");
    const totalCategories = document.getElementById("totalCategories");
    const legislativeLawCount =
        document.getElementById("legislativeLawCount");


    /* =====================================================
       CHECK DATABASE
    ===================================================== */

    if (
        typeof legislativeLaws === "undefined" ||
        !Array.isArray(legislativeLaws)
    ) {

        console.error(
            "Legislative laws database was not found."
        );

        return;
    }


    /* =====================================================
       UPDATE STATISTICS
    ===================================================== */

    if (totalLaws) {

        totalLaws.textContent =
            legislativeLaws.length;

    }


    if (legislativeLawCount) {

        legislativeLawCount.textContent =
            legislativeLaws.length;

    }


    /* =====================================================
       GET UNIQUE CATEGORIES
    ===================================================== */

    const categories = [
        ...new Set(
            legislativeLaws.map(
                law => law.category
            )
        )
    ].sort();


    if (totalCategories) {

        totalCategories.textContent =
            categories.length;

    }


    /* =====================================================
       POPULATE CATEGORY FILTER
    ===================================================== */

    if (categoryFilter) {

        categories.forEach(category => {

            const option =
                document.createElement("option");

            option.value = category;

            option.textContent = category;

            categoryFilter.appendChild(option);

        });

    }


    /* =====================================================
       RENDER LAWS
    ===================================================== */

    function renderLaws(records) {

        if (!lawsGrid) return;


        lawsGrid.innerHTML = "";


        /* EMPTY STATE */

        if (records.length === 0) {

            lawsGrid.innerHTML = `

                <div class="legislative-empty">

                    <div class="legislative-empty-icon">
                        🔎
                    </div>

                    <h3>
                        No legislation found
                    </h3>

                    <p>
                        No legislative record matches
                        your search or selected filters.
                    </p>

                </div>

            `;

            return;
        }


        /* CREATE CARDS */

        records.forEach((law, index) => {

            const card =
                document.createElement("article");

            card.className =
                "legislative-law-card";


            card.innerHTML = `

                <div class="legislative-law-number">

                    ${String(index + 1).padStart(2, "0")}

                </div>


                <div class="legislative-law-content">

                    <div class="legislative-law-meta">

                        <span class="law-year">
                            ${law.year}
                        </span>

                        <span class="law-category">
                            ${law.category}
                        </span>

                    </div>


                    <h3>
                        ${law.title}
                    </h3>


                    <p>
                        ${law.description}
                    </p>


                    <div class="legislative-law-footer">

                        <span>
                            <i class="fas fa-landmark"></i>
                            Legislative Record
                        </span>

                        <span>
                            ${law.year}
                        </span>

                    </div>

                </div>

            `;


            lawsGrid.appendChild(card);

        });

    }


    /* =====================================================
       FILTER RECORDS
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
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";


        const filtered =
            legislativeLaws.filter(law => {

                const matchesYear =
                    selectedYear === "all" ||
                    String(law.year) === selectedYear;


                const matchesCategory =
                    selectedCategory === "all" ||
                    law.category === selectedCategory;


                const searchableText = `

                    ${law.title}
                    ${law.description}
                    ${law.category}
                    ${law.year}

                `.toLowerCase();


                const matchesSearch =
                    searchTerm === "" ||
                    searchableText.includes(searchTerm);


                return (
                    matchesYear &&
                    matchesCategory &&
                    matchesSearch
                );

            });


        renderLaws(filtered);

    }


    /* =====================================================
       EVENT LISTENERS
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

    renderLaws(legislativeLaws);

});
/* =========================================================
   LEGISLATIVE RECORD JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    function animateCounter(element, target, duration = 1200) {

        if (!element) return;

        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const eased =
                1 - Math.pow(1 - progress, 3);

            const current =
                Math.floor(start + (target - start) * eased);

            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }


    /* =====================================================
       MAIN LAW COUNTER
    ===================================================== */

    const legislativeLawCount =
    document.getElementById("legislativeLawCount");

if (legislativeLawCount) {
    legislativeLawCount.textContent = "40+";
}


    /* =====================================================
       DYNAMIC TOTAL LAWS
    ===================================================== */

    const totalLaws =
        document.getElementById("totalLaws");

    if (totalLaws) {

        const value =
            parseInt(totalLaws.textContent) || 0;

        animateCounter(
            totalLaws,
            value
        );
    }


    /* =====================================================
       CATEGORY COUNT
    ===================================================== */

    const totalCategories =
        document.getElementById("totalCategories");

    if (totalCategories) {

        const value =
            parseInt(totalCategories.textContent) || 0;

        animateCounter(
            totalCategories,
            value
        );
    }


    /* =====================================================
       SMOOTH YEAR NAVIGATION
    ===================================================== */

    const yearCards =
        document.querySelectorAll(
            ".legislative-year-card"
        );

    yearCards.forEach(card => {

        card.addEventListener("click", () => {

            const year =
                card.querySelector("strong")?.textContent.trim();

            const filter =
                document.getElementById("lawYearFilter");

            if (!filter || !year) return;

            filter.value = year;

            filter.dispatchEvent(
                new Event("change")
            );

            const lawsGrid =
                document.getElementById(
                    "legislativeLawsGrid"
                );

            if (lawsGrid) {

                lawsGrid.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       SEARCH
    ===================================================== */

    const search =
        document.getElementById("lawSearch");

    if (search) {

        search.addEventListener("input", () => {

            const event =
                new Event("legislativeSearch");

            document.dispatchEvent(event);

        });

    }

});