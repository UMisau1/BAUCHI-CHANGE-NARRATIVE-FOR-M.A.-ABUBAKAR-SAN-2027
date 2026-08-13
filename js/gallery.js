/* ==========================================
   M.A. CAMPAIGN WEBSITE
   gallery.js
========================================== */

/* ==========================================
   GALLERY FILTER
========================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (filter === "all") {

                item.style.display = "block";

            }

            else if (item.classList.contains(filter)) {

                item.style.display = "block";

            }

            else {

                item.style.display = "none";

            }

        });

    });

});


/* ==========================================
   LIGHTBOX
========================================== */

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

    <span id="closeLightbox">&times;</span>

    <img id="lightboxImage">

`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightboxImage");

galleryItems.forEach(item => {

    const image = item.querySelector("img");

    if(image){

        image.addEventListener("click", () => {

            lightbox.classList.add("show");

            lightboxImage.src = image.src;

        });

    }

});


/* ==========================================
   CLOSE LIGHTBOX
========================================== */

const closeLightbox = document.getElementById("closeLightbox");

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

    }

});


/* ==========================================
   KEYBOARD ESC
========================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("show");

    }

});


/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.classList.add("hover");

    });

    item.addEventListener("mouseleave", () => {

        item.classList.remove("hover");

    });

});


/* ==========================================
   END OF GALLERY.JS
========================================== */
