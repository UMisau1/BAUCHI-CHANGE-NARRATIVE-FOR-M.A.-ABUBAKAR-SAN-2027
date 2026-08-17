/* ==========================================
   PROJECTS GALLERY SYSTEM
   Dynamic Images + Categories + Load More
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const gallery =
        document.getElementById("dynamicGallery");

    const filters =
        document.getElementById("galleryFilters");

    const loadMoreBtn =
        document.getElementById("loadMoreBtn");


    /* ==========================================
       SETTINGS
    ========================================== */

    const imagesPerLoad = 24;

    let allImages = [];

    let currentCategory = "all";

    let visibleCount = imagesPerLoad;


    /* ==========================================
       CHECK GALLERY
    ========================================== */

    if (!gallery) {

        console.warn(
            "Dynamic gallery not found."
        );

        return;
    }


/* ==========================================
       LOAD IMAGES.JSON
========================================== */

fetch("images/data/images.json")

.then(function (response) {

if (!response.ok) {

throw new Error(
"Unable to load images.json"
);

}

return response.json();

})


.then(function (images) {

console.log(
"Images loaded:",
images.length
);


allImages = images;

/* ==========================================
   UPDATE GALLERY PHOTO COUNT
========================================== */

const galleryPhotoCount =
    document.getElementById("galleryPhotoCount");

if (galleryPhotoCount) {

    galleryPhotoCount.textContent =
        images.length.toLocaleString();

}


/* ==========================================
               CREATE FILTERS
========================================== */

    createFilters();


/* ==========================================
        DISPLAY FIRST IMAGES
========================================== */

 renderGallery();


 })


.catch(function (error) {

       console.error(
          "Gallery Error:",
                error
);


            gallery.innerHTML = `

                <div class="gallery-error">

                    <p>
                        Unable to load project images.
                    </p>

                </div>

            `;

        });


    /* ==========================================
       CREATE FILTER BUTTONS
    ========================================== */

    function createFilters() {

        if (!filters) {
            return;
        }


        filters.innerHTML = "";


        /* ALL BUTTON */

        const allButton =
            document.createElement("button");


        allButton.className =
            "filter-btn active";


        allButton.type =
            "button";


        allButton.dataset.filter =
            "all";


        allButton.textContent =
            "All";


        filters.appendChild(
            allButton
        );


        /* GET UNIQUE CATEGORIES */

        const categories = [];


        allImages.forEach(function (image) {

            const category =
                image.category;


            if (
                category &&
                !categories.includes(category)
            ) {

                categories.push(
                    category
                );

            }

        });


        /* CREATE CATEGORY BUTTONS */

        categories.forEach(
            function (category) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "filter-btn";


                button.type =
                    "button";


                button.dataset.filter =
                    category;


                button.textContent =
                    category;


                filters.appendChild(
                    button
                );

            }
        );


        /* FILTER EVENTS */

        filters
            .querySelectorAll(".filter-btn")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        filters
                            .querySelectorAll(
                                ".filter-btn"
                            )
                            .forEach(
                                function (btn) {

                                    btn.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        button.classList.add(
                            "active"
                        );


                        currentCategory =
                            button.dataset.filter;


                        visibleCount =
                            imagesPerLoad;


                        renderGallery();

                    }
                );

            });

    }


    /* ==========================================
       RENDER GALLERY
    ========================================== */

    function renderGallery() {

        gallery.innerHTML = "";


        /* FILTER IMAGES */

        let filteredImages;


        if (
            currentCategory ===
            "all"
        ) {

            filteredImages =
                allImages;

        } else {

            filteredImages =
                allImages.filter(
                    function (image) {

                        return (
                            image.category ===
                            currentCategory
                        );

                    }
                );

        }


        /* IMAGES TO DISPLAY */

        const imagesToShow =
            filteredImages.slice(
                0,
                visibleCount
            );


        /* CREATE IMAGE CARDS */

        imagesToShow.forEach(
            function (image) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "gallery-item";


                item.dataset.category =
                    image.category ||
                    "Other";


                item.innerHTML = `

                    <img
                        src="${image.file}"
                        alt="${image.title || "Project Image"}"
                        loading="lazy"
                    >

                    <div class="gallery-overlay">

                        <h3>
                            ${image.title || "Project"}
                        </h3>

                        <p>
                            ${image.category || "Other"}
                        </p>

                    </div>

                `;


                gallery.appendChild(
                    item
                );

            }
        );


        /* ==========================================
           LOAD MORE BUTTON
        ========================================== */

        if (!loadMoreBtn) {
            return;
        }


        if (
            visibleCount <
            filteredImages.length
        ) {

            loadMoreBtn.style.display =
                "inline-block";

        } else {

            loadMoreBtn.style.display =
                "none";

        }

    }


    /* ==========================================
       LOAD MORE
    ========================================== */

    if (loadMoreBtn) {

        loadMoreBtn.addEventListener(
            "click",
            function () {

                visibleCount +=
                    imagesPerLoad;


                renderGallery();

            }
        );

    }

});