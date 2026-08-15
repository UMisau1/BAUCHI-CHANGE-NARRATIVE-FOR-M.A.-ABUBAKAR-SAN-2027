/* =========================================================
   RURAL DEVELOPMENT — REAL RECORDS
   M.A. CAMPAIGN WEBSITE

   Period:
   31 May 2015 – 31 May 2019

   IMPORTANT:
   These are documented programme/project records.
   No demo/sample records are included.
========================================================= */

const ruralDevelopmentRecords = [

    /* =====================================================
       2015
    ===================================================== */

    {
        id: 1,
        year: 2015,
        category: "Healthcare",
        title: "Construction of 19 Primary Healthcare Centres",

        description:
            "Construction of 19 Primary Healthcare Centres across Bauchi State under the 2015 Conditional Grant Scheme.",

        quantity: "19 PHCs",

        programme:
            "2015 Conditional Grant Scheme / SDGs",

        source:
            "The Nation / contemporary official account",

        verification:
            "Contemporary report published in June 2017 describing projects implemented under the 2015 CGS."
    },

    {
        id: 2,
        year: 2015,
        category: "Healthcare",
        title: "Construction of PHC Staff Quarters",

        description:
            "Construction of staff accommodation associated with the Primary Healthcare Centre interventions.",

        quantity: "19 staff quarters",

        programme:
            "2015 Conditional Grant Scheme / SDGs",

        source:
            "The Nation / contemporary official account",

        verification:
            "Contemporary account records 19 PHCs and staff quarters."
    },

    {
        id: 3,
        year: 2015,
        category: "Water Supply",
        title: "Solar-Powered Borehole Programme",

        description:
            "Drilling and installation of solar-powered boreholes to improve access to water in communities.",

        quantity: "33 solar-powered boreholes",

        programme:
            "2015 Conditional Grant Scheme / SDGs",

        source:
            "The Nation / Premium Times",

        verification:
            "Contemporary reports record 33 solar-powered boreholes."
    },

    {
        id: 4,
        year: 2015,
        category: "Water Supply",
        title: "Hand-Pump Borehole Programme",

        description:
            "Drilling and installation of hand-pump boreholes as part of rural water-supply interventions.",

        quantity: "57 hand-pump boreholes",

        programme:
            "2015 Conditional Grant Scheme / SDGs",

        source:
            "The Nation / Premium Times",

        verification:
            "Contemporary reports record 57 hand-pump boreholes."
    },

    {
        id: 5,
        year: 2015,
        category: "Healthcare",
        title: "Ambulance Support for Primary Healthcare",

        description:
            "Provision of ambulances to support healthcare delivery associated with the Primary Healthcare Centres.",

        quantity: "6 ambulances",

        programme:
            "2015 Conditional Grant Scheme / SDGs",

        source:
            "The Nation / Premium Times",

        verification:
            "Contemporary reports record the supply of six ambulances."
    },

    {
        id: 6,
        year: 2015,
        category: "Healthcare",
        title: "Medical Equipment for Primary Healthcare Centres",

        description:
            "Supply of medical equipment to the Primary Healthcare Centres constructed under the intervention.",

        quantity: "Equipment supplied to 19 PHCs",

        programme:
            "2015 Conditional Grant Scheme / SDGs",

        source:
            "The Nation / Premium Times",

        verification:
            "Contemporary reports record medical equipment supplied to the 19 PHCs."
    },


    /* =====================================================
       2017
    ===================================================== */

    {
        id: 7,
        year: 2017,
        category: "Agriculture",
        title: "Anchor Borrowers Rice Production Programme",

        description:
            "Bauchi State selected and verified farmers for participation in the Anchor Borrowers Programme for rice production.",

        quantity: "16,000 verified farmers",

        programme:
            "Anchor Borrowers Programme",

        source:
            "Punch / NAN",

        verification:
            "Contemporary January 2017 report records 16,000 verified farmers."
    },

    {
        id: 8,
        year: 2017,
        category: "Agriculture",
        title: "Anchor Borrowers Farmer Training",

        description:
            "Verified farmers underwent training on agronomic practices to improve rice production and enable repayment of the agricultural loans.",

        quantity: "16,000 beneficiaries",

        programme:
            "Anchor Borrowers Programme",

        source:
            "Daily Times / contemporary report",

        verification:
            "Contemporary January 2017 report records training for 16,000 verified beneficiaries."
    },

    {
        id: 9,
        year: 2017,
        category: "Rural Development",
        title: "SDGs Community Development Projects",

        description:
            "Health, water and environmental projects were implemented across Bauchi State through the Sustainable Development Goals intervention.",

        quantity: "₦1.2 billion worth of projects",

        programme:
            "Sustainable Development Goals / Conditional Grant Scheme",

        source:
            "The Nation",

        verification:
            "State SDGs Office reported ₦1.2bn worth of projects executed within two years."
    },


    /* =====================================================
       2019
    ===================================================== */

    {
        id: 10,
        year: 2019,
        category: "Agriculture",
        title: "Anchor Borrowers Programme — Bauchi Farmers",

        description:
            "Contemporary reporting stated that thousands of Bauchi farmers had benefited from the Anchor Borrowers Programme and associated agricultural financing.",

        quantity: "10,000 farmers reported as beneficiaries",

        programme:
            "Anchor Borrowers Programme",

        source:
            "Punch",

        verification:
            "February 2019 contemporary report citing the Bauchi Rice Farmers Association."
    }

];


/* =========================================================
   DATABASE STATISTICS
========================================================= */

const ruralDevelopmentStats = {

    totalRecords:
        ruralDevelopmentRecords.length,

    years: [
        ...new Set(
            ruralDevelopmentRecords.map(
                record => record.year
            )
        )
    ],

    categories: [
        ...new Set(
            ruralDevelopmentRecords.map(
                record => record.category
            )
        )
    ],

    period:
        "31 May 2015 – 31 May 2019"

};


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function getRuralRecordsByYear(year) {

    return ruralDevelopmentRecords.filter(
        record =>
            record.year === Number(year)
    );

}


function getRuralRecordsByCategory(category) {

    return ruralDevelopmentRecords.filter(
        record =>
            record.category.toLowerCase() ===
            String(category).toLowerCase()
    );

}


function searchRuralDevelopment(keyword) {

    const searchTerm =
        String(keyword)
            .toLowerCase()
            .trim();

    if (!searchTerm) {
        return ruralDevelopmentRecords;
    }

    return ruralDevelopmentRecords.filter(
        record => {

            const searchableText = `
                ${record.year}
                ${record.category}
                ${record.title}
                ${record.description}
                ${record.quantity}
                ${record.programme}
                ${record.source}
            `.toLowerCase();

            return searchableText.includes(
                searchTerm
            );

        }
    );

}


/* =========================================================
   EXPORT
========================================================= */

if (typeof window !== "undefined") {

    window.ruralDevelopmentRecords =
        ruralDevelopmentRecords;

    window.ruralDevelopmentStats =
        ruralDevelopmentStats;

    window.getRuralRecordsByYear =
        getRuralRecordsByYear;

    window.getRuralRecordsByCategory =
        getRuralRecordsByCategory;

    window.searchRuralDevelopment =
        searchRuralDevelopment;

}