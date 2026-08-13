/* =========================================================
   M.A. CAMPAIGN WEBSITE
   EXECUTIVE DIRECTIVES UI
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const grid =
        document.getElementById("executiveGrid");

    const empty =
        document.getElementById("executiveEmpty");

    const total =
        document.getElementById("executiveTotal");

    const categories =
        document.getElementById("executiveCategories");

    const yearFilter =
        document.getElementById("executiveYearFilter");

    const searchInput =
        document.getElementById("executiveSearch");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!grid || !window.executiveDirectives) {

        console.warn(
            "Executive Directives database was not loaded."
        );

        return;
    }


    /* =====================================================
       DATABASE
    ===================================================== */

    const records =
        window.executiveDirectives;


    /* =====================================================
       STATISTICS
    ===================================================== */

    if (total) {

        total.textContent =
            records.length;

    }


    if (categories) {

        const uniqueCategories =
            new Set(
                records.map(
                    item => item.category
                )
            );

        categories.textContent =
            uniqueCategories.size;

    }


    /* =====================================================
       RENDER RECORDS
    ===================================================== */

    function renderRecords(data) {

        grid.innerHTML = "";


        if (!data.length) {

            if (empty) {
                empty.hidden = false;
            }

            return;
        }


        if (empty) {
            empty.hidden = true;
        }


        data.forEach((item, index) => {

            const card =
                document.createElement("article");

            card.className =
                "executive-card";


            card.innerHTML = `

                <div class="executive-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>


                <div class="executive-card-content">

                    <span class="executive-category">
                        ${item.category}
                    </span>


                    <span class="executive-date">
                        ${item.date}
                    </span>


                    <h3>
                        ${item.title}
                    </h3>


                    <p class="executive-subject">
                        ${item.subject}
                    </p>


                    <div class="executive-details">

                        <div>
                            <strong>
                                Authority
                            </strong>

                            <span>
                                ${item.authority}
                            </span>
                        </div>


                        <div>
                            <strong>
                                Action
                            </strong>

                            <span>
                                ${item.action}
                            </span>
                        </div>


                        <div>
                            <strong>
                                Legal Basis
                            </strong>

                            <span>
                                ${item.legalBasis}
                            </span>
                        </div>


                        <div>
                            <strong>
                                Status
                            </strong>

                            <span>
                                ${item.status}
                            </span>
                        </div>

                    </div>


                    <div class="executive-source">

                        <strong>
                            Source:
                        </strong>

                        ${item.source}

                    </div>

                </div>

            `;


            grid.appendChild(card);

        });

    }


    /* =====================================================
       FILTER
    ===================================================== */

    function filterRecords() {

        const selectedYear =
            yearFilter
                ? yearFilter.value
                : "all";


        const searchTerm =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        const filtered =
            records.filter(item => {

                const yearMatch =
                    selectedYear === "all" ||
                    String(item.year) ===
                    selectedYear;


                const searchMatch =
                    !searchTerm ||
                    item.title
                        .toLowerCase()
                        .includes(searchTerm) ||

                    item.category
                        .toLowerCase()
                        .includes(searchTerm) ||

                    item.subject
                        .toLowerCase()
                        .includes(searchTerm);


                return (
                    yearMatch &&
                    searchMatch
                );

            });


        renderRecords(filtered);

    }


    /* =====================================================
       EVENTS
    ===================================================== */

    if (yearFilter) {

        yearFilter.addEventListener(
            "change",
            filterRecords
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterRecords
        );

    }


    /* =====================================================
       INITIAL DISPLAY
    ===================================================== */

    renderRecords(records);

});