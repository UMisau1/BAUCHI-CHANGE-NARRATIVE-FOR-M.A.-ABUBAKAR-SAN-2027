/* =========================================================
   M.A. CAMPAIGN WEBSITE
   RURAL TRANSFORMATION RECORD

   Period:
   31 May 2015 – 31 May 2019

   IMPORTANT:
   These are documented rural/community development
   interventions and programme areas.

   They are NOT presented as laws.
========================================================= */

const ruralTransformationRecords = [

    /* =====================================================
       EDUCATION
    ===================================================== */

    {
        id: 1,
        year: 2015,
        category: "Education",

        title:
            "Rural Education Infrastructure",

        description:
            "Community development interventions included support for education infrastructure in rural and underserved communities, including classrooms and related facilities.",

        figure:
            "Education infrastructure",

        status:
            "Documented Programme",

        source:
            "Community-driven development programme records",

        verification:
            "Education was identified as one of the core sectors of Bauchi's community-driven development interventions."
    },


    /* =====================================================
       HEALTH
    ===================================================== */

    {
        id: 2,
        year: 2015,
        category: "Health",

        title:
            "Rural Health Facilities",

        description:
            "Community-level interventions supported health facilities and access to basic healthcare services in rural communities.",

        figure:
            "Community health infrastructure",

        status:
            "Documented Programme",

        source:
            "Community-driven development programme records",

        verification:
            "Health was one of the recognised sectors under the community-driven development framework."
    },


    /* =====================================================
       RURAL ELECTRIFICATION
    ===================================================== */

    {
        id: 3,
        year: 2016,
        category: "Rural Electrification",

        title:
            "Community Rural Electrification",

        description:
            "Rural development interventions included provision and improvement of electricity infrastructure for communities with limited access to power.",

        figure:
            "Electricity infrastructure",

        status:
            "Documented Programme",

        source:
            "Community-driven development programme records",

        verification:
            "Rural electrification was identified as a priority community-development sector."
    },


    /* =====================================================
       WATER
    ===================================================== */

    {
        id: 4,
        year: 2016,
        category: "Water Supply",

        title:
            "Rural Water Supply Projects",

        description:
            "Community development interventions included water supply facilities intended to improve access to safe and reliable water in rural communities.",

        figure:
            "Community water infrastructure",

        status:
            "Documented Programme",

        source:
            "Community-driven development programme records",

        verification:
            "Water supply was one of the core sectors supported through community-driven development."
    },


    /* =====================================================
       TRANSPORT
    ===================================================== */

    {
        id: 5,
        year: 2017,
        category: "Transportation",

        title:
            "Rural Transportation Infrastructure",

        description:
            "Community-level infrastructure interventions included transportation-related projects designed to improve connectivity and access to essential services.",

        figure:
            "Rural transport infrastructure",

        status:
            "Documented Programme",

        source:
            "Community-driven development programme records",

        verification:
            "Transportation was listed among the sectors covered by the community development programme."
    },


    /* =====================================================
       ENVIRONMENT
    ===================================================== */

    {
        id: 6,
        year: 2017,
        category: "Environment",

        title:
            "Community Environmental Infrastructure",

        description:
            "Environmental interventions included community infrastructure intended to improve sanitation, drainage and environmental conditions.",

        figure:
            "Environmental infrastructure",

        status:
            "Documented Programme",

        source:
            "Community-driven development programme records",

        verification:
            "Environment was identified as a supported sector under the community-driven development framework."
    },


    /* =====================================================
       SOCIO-ECONOMIC DEVELOPMENT
    ===================================================== */

    {
        id: 7,
        year: 2018,
        category: "Socio-Economic Development",

        title:
            "Community Socio-Economic Infrastructure",

        description:
            "Rural development programmes supported community facilities designed to strengthen local economic activity and improve social welfare.",

        figure:
            "Community development infrastructure",

        status:
            "Documented Programme",

        source:
            "Community-driven development programme records",

        verification:
            "Socio-economic development was recognised as a programme sector."
    },


    /* =====================================================
       GENDER & VULNERABLE GROUPS
    ===================================================== */

    {
        id: 8,
        year: 2018,
        category: "Gender & Vulnerable Groups",

        title:
            "Support for Women and Vulnerable Communities",

        description:
            "Community-driven interventions included support for women, vulnerable groups and community members requiring assistance to improve their living conditions and economic opportunities.",

        figure:
            "Community empowerment",

        status:
            "Documented Programme",

        source:
            "Community-driven development programme records",

        verification:
            "Gender and vulnerable groups were identified as a specific intervention sector."
    },


    /* =====================================================
       COMMUNITY DEVELOPMENT
    ===================================================== */

    {
        id: 9,
        year: 2019,
        category: "Community Development",

        title:
            "Community-Driven Development Approach",

        description:
            "The community-driven development model placed communities at the centre of identifying priority needs and implementing micro-projects addressing local service-delivery gaps.",

        figure:
            "Community-led development",

        status:
            "Documented Programme",

        source:
            "World Bank / Bauchi community development records",

        verification:
            "The World Bank describes Bauchi's community-driven approach as involving communities in deciding which projects were most meaningful to them."
    }

];


/* =========================================================
   STATISTICS
========================================================= */

const ruralTransformationStats = {

    total:
        ruralTransformationRecords.length,

    period:
        "31 May 2015 – 31 May 2019",

    categories:
        [
            ...new Set(
                ruralTransformationRecords.map(
                    item => item.category
                )
            )
        ],

    years:
        [
            ...new Set(
                ruralTransformationRecords.map(
                    item => item.year
                )
            )
        ]

};


/* =========================================================
   FILTER BY YEAR
========================================================= */

function getRuralRecordsByYear(year) {

    return ruralTransformationRecords.filter(
        item =>
            item.year === Number(year)
    );

}


/* =========================================================
   FILTER BY CATEGORY
========================================================= */

function getRuralRecordsByCategory(category) {

    return ruralTransformationRecords.filter(
        item =>
            item.category.toLowerCase() ===
            String(category).toLowerCase()
    );

}


/* =========================================================
   SEARCH
========================================================= */

function searchRuralTransformation(keyword) {

    const searchTerm =
        String(keyword)
            .toLowerCase()
            .trim();


    if (!searchTerm) {

        return ruralTransformationRecords;

    }


    return ruralTransformationRecords.filter(
        item => {

            const searchableText = `

                ${item.year}
                ${item.category}
                ${item.title}
                ${item.description}
                ${item.figure}
                ${item.status}
                ${item.source}

            `.toLowerCase();


            return searchableText.includes(
                searchTerm
            );

        }
    );

}


/* =========================================================
   EXPORT TO WINDOW
========================================================= */

if (typeof window !== "undefined") {

    window.ruralTransformationRecords =
        ruralTransformationRecords;

    window.ruralTransformationStats =
        ruralTransformationStats;

    window.getRuralRecordsByYear =
        getRuralRecordsByYear;

    window.getRuralRecordsByCategory =
        getRuralRecordsByCategory;

    window.searchRuralTransformation =
        searchRuralTransformation;

}