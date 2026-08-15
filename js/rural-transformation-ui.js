/* =========================================================
   RURAL TRANSFORMATION
   M.A. CAMPAIGN WEBSITE

   UI CONTROLLER
   Uses ruralTransformationRecords database.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const grid =
        document.getElementById("ruralTransformationGrid");

    const yearFilter =
        document.getElementById("ruralYearFilter");

    const categoryFilter =
        document.getElementById("ruralCategoryFilter");

    const searchInput =
        document.getElementById("ruralSearch");

    const totalRecords =
        document.getElementById("ruralTotalRecords");

    const totalCategories =
        document.getElementById("ruralTotalCategories");


    /* =====================================================
       STOP IF SECTION DOES NOT EXIST
    ===================================================== */

    if (!grid) return;


    /* =====================================================
       CHECK DATABASE
    ===================================================== */

    if (
        typeof ruralTransformationRecords === "undefined" ||
        !Array.isArray(ruralTransformationRecords)
    ) {

        console.error(
            "ruralTransformationRecords database was not found."
        );

        grid.innerHTML = `
            <div class="rural-record-empty">

                <h3>
                    Rural transformation records unavailable
                </h3>

                <p>
                    The rural transformation database
                    has not been loaded.
                </p>

            </div>
        `;

        return;
    }


    /* =====================================================
       CATEGORY DROPDOWN
    ===================================================== */

    if (categoryFilter) {

        const categories = [
            ...new Set(
                ruralTransformationRecords
                    .map(record => record.category)
                    .filter(Boolean)
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

    function updateStatistics(records) {

        if (totalRecords) {

            totalRecords.textContent =
                records.length;

        }


        if (totalCategories) {

            const categories =
                new Set(
                    records
                        .map(record => record.category)
                        .filter(Boolean)
                );

            totalCategories.textContent =
                categories.size;

        }

    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       DISPLAY RECORDS
    ===================================================== */

    function renderRuralRecords() {

        const selectedYear =
            yearFilter?.value || "all";

        const selectedCategory =
            categoryFilter?.value || "all";

        const searchTerm =
            searchInput?.value
                .trim()
                .toLowerCase() || "";


        const filteredRecords =
            ruralTransformationRecords.filter(record => {

                const yearMatch =
                    selectedYear === "all" ||
                    String(record.year) === selectedYear;


                const categoryMatch =
                    selectedCategory === "all" ||
                    record.category === selectedCategory;


                const searchableText = [

                    record.year,
                    record.category,
                    record.title,
                    record.description,
                    record.figure,
                    record.status,
                    record.source

                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();


                const searchMatch =
                    !searchTerm ||
                    searchableText.includes(searchTerm);


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

        if (!filteredRecords.length) {

            grid.innerHTML = `

                <div class="rural-record-empty">

                    <h3>
                        No rural transformation record found
                    </h3>

                    <p>
                        No record matches the selected
                        year, category or search term.
                    </p>

                </div>

            `;

            updateStatistics([]);

            return;
        }


        /* =================================================
           CREATE CARDS
        ================================================= */

        filteredRecords.forEach(record => {

            const card =
                document.createElement("article");

            card.className =
                "rural-record-card";


            const year =
                escapeHTML(record.year);

            const category =
                escapeHTML(record.category);

            const title =
                escapeHTML(record.title);

            const description =
                escapeHTML(record.description);

            const figure =
                escapeHTML(record.figure);

            const status =
                escapeHTML(record.status);

            const source =
                escapeHTML(record.source);


            card.innerHTML = `

                <div class="rural-record-card-top">

                    <span class="rural-record-year">
                        ${year}
                    </span>

                    <span class="rural-record-category">
                        ${category}
                    </span>

                </div>


                <h3>
                    ${title}
                </h3>


                ${
                    description
                    ? `
                        <p class="rural-record-description">
                            ${description}
                        </p>
                    `
                    : ""
                }


                ${
                    figure
                    ? `
                        <div class="rural-record-figure">
                            ${figure}
                        </div>
                    `
                    : ""
                }


                ${
                    status
                    ? `
                        <div class="rural-record-status">
                            ${status}
                        </div>
                    `
                    : ""
                }


                ${
                    source
                    ? `
                        <div class="rural-record-source">
                            Source: ${source}
                        </div>
                    `
                    : ""
                }

            `;


            grid.appendChild(card);

        });


        /* =================================================
           UPDATE STATISTICS
        ================================================= */

        updateStatistics(filteredRecords);


        /* =================================================
           REVEAL ANIMATION
        ================================================= */

        requestAnimationFrame(() => {

            const cards =
                grid.querySelectorAll(
                    ".rural-record-card"
                );


            cards.forEach((card, index) => {

                card.style.animation =
                    `ruralCardReveal
                     0.45s ease
                     ${index * 0.04}s both`;

            });

        });

    }


    /* =====================================================
       FILTER EVENTS
    ===================================================== */

    if (yearFilter) {

        yearFilter.addEventListener(
            "change",
            renderRuralRecords
        );

    }


    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            renderRuralRecords
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            renderRuralRecords
        );

    }


    /* =====================================================
       INITIAL LOAD
    ===================================================== */

    if (yearFilter) {
        yearFilter.value = "all";
    }

    if (categoryFilter) {
        categoryFilter.value = "all";
    }

    if (searchInput) {
        searchInput.value = "";
    }


    renderRuralRecords();

});