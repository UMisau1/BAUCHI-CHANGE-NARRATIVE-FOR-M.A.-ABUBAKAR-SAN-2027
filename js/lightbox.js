/* ==========================================
   DYNAMIC GALLERY LIGHTBOX
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeButton = document.querySelector(".close-lightbox");

    if (!lightbox || !lightboxImg) {

        console.error("Lightbox HTML elements were not found.");

        return;
    }


    /* ==========================================
       OPEN IMAGE
    ========================================== */

    document.addEventListener("click", function (event) {

        const image = event.target.closest(
            "#dynamicGallery img"
        );

        if (!image) {
            return;
        }


        lightboxImg.src = image.src;
        lightboxImg.alt =
            image.alt || "Gallery Image";


        lightbox.classList.add("active");

        document.body.classList.add(
            "lightbox-open"
        );

    });


    /* ==========================================
       CLOSE BUTTON
    ========================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function () {

                closeLightbox();

            }
        );

    }


    /* ==========================================
       CLOSE BACKGROUND
    ========================================== */

    lightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === lightbox) {

                closeLightbox();

            }

        }
    );


    /* ==========================================
       ESCAPE KEY
    ========================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeLightbox();

            }

        }
    );


    /* ==========================================
       CLOSE FUNCTION
    ========================================== */

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.classList.remove(
            "lightbox-open"
        );

        lightboxImg.src = "";

    }

});