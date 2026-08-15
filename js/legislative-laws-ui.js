/* =========================================================
   LEGISLATIVE LAWS — USER INTERFACE
   Uses the REAL legislativeLaws database
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

    const mainLawCount =
        document.getElementById("legislativeLawCount");


    if (!grid) return;


    /* =====================================================
       MAIN COUNTER
       Keep 40+
    ===================================================== */

    if (mainLawCount) {
        mainLawCount.textContent = "40+";
    }


    /* =====================================================
       YEARS
    ===================================================== */

    if (yearFilter) {

        const years = [
            ...new Set(
                legislativeLaws.map(
                    law => law.year
                )
            )
        ].sort((a, b) => a - b);


        yearFilter.innerHTML = `
            <option value="all">
                All Years
            </option>
        `;


        years.forEach(year => {

            const option =
                document.createElement("option");

            option.value = year;
            option.textContent = year;

            yearFilter.appendChild(option);

        });

    }


    /* =====================================================
       CATEGORIES
    ===================================================== */

    if (categoryFilter) {

        const categories = [
            ...new Set(
                legislativeLaws.map(
                    law => law.category
                )
            )
        ].sort();


        categoryFilter.innerHTML = `
            <option value="all">
                All Categories
            </option>
        `;


        categories.forEach(category => {

            const option =
                document.createElement("option");

            option.value = category;
            option.textContent = category;

            categoryFilter.appendChild(option);

        });

    }


    /* =====================================================
       STATISTICS
    ===================================================== */

    function updateStatistics(filteredLaws) {

        if (totalLaws) {

            totalLaws.textContent =
                filteredLaws.length;

        }


        if (totalCategories) {

            const categories =
                new Set(
                    filteredLaws.map(
                        law => law.category
                    )
                );

            totalCategories.textContent =
                categories.size;

        }

    }


    /* =====================================================
       DISPLAY LAWS
    ===================================================== */

    function displayLaws() {

        const selectedYear =
            yearFilter?.value || "all";


        const selectedCategory =
            categoryFilter?.value || "all";


        const searchTerm =
            searchInput?.value
                .trim()
                .toLowerCase() || "";


        const filteredLaws =
            legislativeLaws.filter(law => {


                const yearMatch =
                    selectedYear === "all" ||
                    String(law.year) === selectedYear;


                const categoryMatch =
                    selectedCategory === "all" ||
                    law.category === selectedCategory;


                const searchableText = `

                    ${law.lawNo}
                    ${law.year}
                    ${law.category}
                    ${law.title}
                    ${law.status}

                `.toLowerCase();


                const searchMatch =
                    !searchTerm ||
                    searchableText.includes(
                        searchTerm
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

        if (!filteredLaws.length) {

            grid.innerHTML = `

                <div class="executive-empty">

                    <h3>
                        No legislation found
                    </h3>

                    <p>
                        No legislative record matches
                        your selected filter or search.
                    </p>

                </div>

            `;

            updateStatistics([]);

            return;

        }


        /* =================================================
           CREATE CARDS
        ================================================= */

        filteredLaws.forEach(law => {

            const card =
                document.createElement("article");


            card.className =
                "executive-card legislative-law-card";


            card.innerHTML = `

                <div class="executive-card-top">

                    <span class="executive-year">
                        ${law.year}
                    </span>

                    <span class="executive-category">
                        ${law.category}
                    </span>

                </div>


                <div class="law-number">

                    LAW NO. ${law.lawNo}

                </div>


                <h3>

                    ${law.title}

                </h3>


                <div class="law-status">

                    ${law.status}

                </div>

            `;


            grid.appendChild(card);

        });


        /* =================================================
           UPDATE STATISTICS
        ================================================= */

        updateStatistics(filteredLaws);

    }


    /* =====================================================
       EVENTS
    ===================================================== */

    yearFilter?.addEventListener(
        "change",
        displayLaws
    );


    categoryFilter?.addEventListener(
        "change",
        displayLaws
    );


    searchInput?.addEventListener(
        "input",
        displayLaws
    );


    /* =====================================================
       INITIAL LOAD
    ================================================= */

    displayLaws();

});