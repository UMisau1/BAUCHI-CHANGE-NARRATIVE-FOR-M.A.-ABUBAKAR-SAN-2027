/* =========================================================
   AGRICULTURE RECORD OF SERVICE
   M.A. CAMPAIGN WEBSITE

   UI CONTROLLER
   Uses the REAL agriculture-record.js database.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const grid =
        document.getElementById("agricultureRecordGrid");

    const yearFilter =
        document.getElementById("agricultureYearFilter");

    const categoryFilter =
        document.getElementById("agricultureCategoryFilter");

    const searchInput =
        document.getElementById("agricultureSearch");

    const totalRecords =
        document.getElementById("agricultureTotalRecords");

    const totalCategories =
        document.getElementById("agricultureTotalCategories");


    /* =====================================================
       STOP IF GRID DOES NOT EXIST
    ===================================================== */

    if (!grid) {

        console.warn(
            "Agriculture Record Grid was not found."
        );

        return;

    }


    /* =====================================================
       LOAD REAL AGRICULTURE DATABASE
    ===================================================== */

    const records =
        window.agricultureRecords || [];


    console.log(
        "Agriculture records loaded:",
        records.length
    );


    /* =====================================================
       DATABASE CHECK
    ===================================================== */

    if (!Array.isArray(records) || records.length === 0) {

        console.error(
            "Agriculture database is empty or not loaded."
        );

        grid.innerHTML = `

            <div class="agriculture-record-empty">

                <h3>
                    Agriculture records unavailable
                </h3>

                <p>
                    The agriculture database file has not
                    been loaded.
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
                records
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

    function updateStatistics(filteredRecords) {

        if (totalRecords) {

            totalRecords.textContent =
                filteredRecords.length;

        }


        if (totalCategories) {

            const categories =
                new Set(
                    filteredRecords
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
       RENDER RECORDS
    ===================================================== */

    function renderAgricultureRecords() {

        const selectedYear =
            yearFilter?.value || "all";

        const selectedCategory =
            categoryFilter?.value || "all";

        const searchTerm =
            searchInput?.value
                .trim()
                .toLowerCase() || "";


        const filteredRecords =
            records.filter(record => {

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
                    record.source,
                    record.verification

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
           EMPTY SEARCH RESULT
        ================================================= */

        if (!filteredRecords.length) {

            grid.innerHTML = `

                <div class="agriculture-record-empty">

                    <h3>
                        No agriculture record found
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
           CREATE RECORD CARDS
        ================================================= */

        filteredRecords.forEach(record => {

            const card =
                document.createElement("article");

            card.className =
                "agriculture-record-card";


            card.innerHTML = `

                <div class="agriculture-record-card-top">

                    <span class="agriculture-record-year">
                        ${escapeHTML(record.year)}
                    </span>

                    <span class="agriculture-record-category">
                        ${escapeHTML(record.category)}
                    </span>

                </div>


                <h3>
                    ${escapeHTML(record.title)}
                </h3>


                <p class="agriculture-record-description">
                    ${escapeHTML(record.description)}
                </p>


                ${
                    record.figure
                    ? `
                        <div class="agriculture-record-figure">

                            <strong>
                                ${escapeHTML(record.figure)}
                            </strong>

                        </div>
                    `
                    : ""
                }


                ${
                    record.status
                    ? `
                        <div class="agriculture-record-status">
                            ${escapeHTML(record.status)}
                        </div>
                    `
                    : ""
                }


                ${
                    record.source
                    ? `
                        <div class="agriculture-record-source">

                            <strong>
                                Source:
                            </strong>

                            ${escapeHTML(record.source)}

                        </div>
                    `
                    : ""
                }


                ${
                    record.verification
                    ? `
                        <div class="agriculture-record-verification">

                            ${escapeHTML(record.verification)}

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

    }


    /* =====================================================
       FILTER EVENTS
    ===================================================== */

    if (yearFilter) {

        yearFilter.addEventListener(
            "change",
            renderAgricultureRecords
        );

    }


    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            renderAgricultureRecords
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            renderAgricultureRecords
        );

    }


    /* =====================================================
       INITIAL DISPLAY
    ===================================================== */

    renderAgricultureRecords();

});