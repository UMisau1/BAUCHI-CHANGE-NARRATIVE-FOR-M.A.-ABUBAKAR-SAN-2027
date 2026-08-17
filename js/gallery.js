/* ==========================================
   M.A. CAMPAIGN WEBSITE
   GALLERY.JS
========================================== */


/* ==========================================
   GALLERY FILTER
========================================== */

document.addEventListener("click", function (event) {

    const button = event.target.closest(".filter-btn");

    if (!button) {
        return;
    }

    /* Remove active from all buttons */
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    /* Add active to clicked button */
    button.classList.add("active");

    /* Get selected category */
    const filter = button.getAttribute("data-filter");

    /* Get gallery items AFTER dynamic gallery has loaded */
    const galleryItems =
        document.querySelectorAll("#dynamicGallery .gallery-item");

    galleryItems.forEach(item => {

        if (filter === "all") {

            item.style.display = "";

        }

        else if (item.classList.contains(filter)) {

            item.style.display = "";

        }

        else {

            item.style.display = "none";

        }

    });

});


/* ==========================================
   END OF GALLERY.JS
========================================== */