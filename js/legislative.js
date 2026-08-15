/* =========================================================
   LEGISLATIVE RECORD UI
   Uses the REAL legislative-laws.js DATABASE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const grid =
        document.getElementById("legislativeLawsGrid");

    const yearFilter =
        document.getElementById("lawYearFilter");

    const categoryFilter =
        document.getElementById("lawCategoryFilter");

    const searchInput =
        document.getElementById("lawSearch");

    const totalLaws =
        document.getElementById("totalLaws");

    const totalCategories =
        document.getElementById("totalCategories");

    const lawCount =
        document.getElementById("legislativeLawCount");


    if (!grid) return;


    /* =====================================================
       GET REAL DATABASE
    ===================================================== */

    const laws =
        window.legislativeLaws || [];


    /* =====================================================
       DATABASE CHECK
    ===================================================== */

    console.log(
        "LEGISLATIVE DATABASE:",
        laws
    );

    console.log(
        "TOTAL LAWS:",
        laws.length
    );


    /* =====================================================
       IF DATABASE IS NOT AVAILABLE
    ===================================================== */

    if (!laws.length) {

        if (totalLaws) {
            totalLaws.textContent = "0";
        }

        if (totalCategories) {
            totalCategories.textContent = "0";
        }

        if (grid) {

            grid.innerHTML = `

                <div class="legislative-empty">

                    <h3>
                        Legislative records unavailable
                    </h3>

                    <p>
                        The legislative database could not be loaded.
                    </p>

                </div>

            `;

        }

        return;
    }


    /* =====================================================
       40+ MAIN DISPLAY
    ===================================================== */

    if (lawCount) {
        lawCount.textContent = "40+";
    }


    /* =====================================================
       REAL TOTAL
    ===================================================== */

    if (totalLaws) {
        totalLaws.textContent = laws.length;
    }


    /* =====================================================
       REAL CATEGORIES
    ===================================================== */

    const categories = [
        ...new Set(
            laws
                .map(law => law.category)
                .filter(Boolean)
        )
    ].sort();


    if (totalCategories) {
        totalCategories.textContent =
            categories.length;
    }


    /* =====================================================
       CATEGORY DROPDOWN
    ===================================================== */

    if (categoryFilter) {

        categoryFilter.innerHTML = "";

        const allOption =
            document.createElement("option");

        allOption.value = "all";
        allOption.textContent =
            "All Categories";

        categoryFilter.appendChild(
            allOption
        );


        categories.forEach(category => {

            const option =
                document.createElement("option");

            option.value = category;
            option.textContent = category;

            categoryFilter.appendChild(
                option
            );

        });

    }


    /* =====================================================
       RENDER LAWS
    ===================================================== */

    function renderLaws() {

        const selectedYear =
            yearFilter?.value || "all";

        const selectedCategory =
            categoryFilter?.value || "all";

        const search =
            searchInput?.value
                .trim()
                .toLowerCase() || "";


        const filtered =
            laws.filter(law => {


                /* YEAR */

                const yearMatch =
                    selectedYear === "all" ||
                    String(law.year) ===
                    selectedYear;


                /* CATEGORY */

                const categoryMatch =
                    selectedCategory === "all" ||
                    law.category ===
                    selectedCategory;


                /* SEARCH */

                const searchableText = `

                    ${law.lawNo || ""}
                    ${law.year || ""}
                    ${law.category || ""}
                    ${law.title || ""}
                    ${law.status || ""}

                `.toLowerCase();


                const searchMatch =
                    !search ||
                    searchableText.includes(
                        search
                    );


                return (
                    yearMatch &&
                    categoryMatch &&
                    searchMatch
                );

            });


        /* =================================================
           CLEAR GRID
        ================================================= */

        grid.innerHTML = "";


        /* =================================================
           EMPTY RESULT
        ================================================= */

        if (!filtered.length) {

            grid.innerHTML = `

                <div class="legislative-empty">

                    <h3>
                        No legislation found
                    </h3>

                    <p>
                        No law matches the selected
                        year, category or search.
                    </p>

                </div>

            `;

            return;
        }


        /* =================================================
           CREATE CARDS
        ================================================= */

        filtered.forEach(law => {

            const card =
                document.createElement("article");

            card.className =
                "legislative-law-card";


            card.innerHTML = `

                <div class="law-card-top">

                    <span class="law-year">
                        ${law.year || ""}
                    </span>

                    <span class="law-category">
                        ${law.category || ""}
                    </span>

                </div>


                <div class="law-number">

                    LAW NO.
                    ${law.lawNo || ""}

                </div>


                <h3>
                    ${law.title || ""}
                </h3>


                ${
                    law.status
                        ? `
                            <p class="law-status">
                                ${law.status}
                            </p>
                          `
                        : ""
                }

            `;


            grid.appendChild(card);

        });

    }


    /* =====================================================
       EVENTS
    ===================================================== */

    yearFilter?.addEventListener(
        "change",
        renderLaws
    );


    categoryFilter?.addEventListener(
        "change",
        renderLaws
    );


    searchInput?.addEventListener(
        "input",
        renderLaws
    );


    /* =====================================================
       INITIAL RENDER
    ===================================================== */

    renderLaws();

});