/* ==========================================
   M.A. CAMPAIGN WEBSITE
   news.js
========================================== */


/* ==========================================
   NEWS SEARCH
========================================== */

const searchInput = document.getElementById("newsSearch");

const newsCards = document.querySelectorAll(".news-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        newsCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value)
                ? "block"
                : "none";

        });

    });

}


/* ==========================================
   LOAD MORE NEWS
========================================== */

const loadMoreBtn = document.getElementById("loadMoreNews");

let currentItems = 6;

if (loadMoreBtn) {

    const allCards = document.querySelectorAll(".news-card");

    allCards.forEach((card, index) => {

        if (index >= currentItems) {

            card.style.display = "none";

        }

    });

    loadMoreBtn.addEventListener("click", () => {

        currentItems += 3;

        allCards.forEach((card, index) => {

            if (index < currentItems) {

                card.style.display = "block";

            }

        });

        if (currentItems >= allCards.length) {

            loadMoreBtn.style.display = "none";

        }

    });

}


/* ==========================================
   NEWSLETTER SUBSCRIBE
========================================== */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = this.querySelector("input").value;

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        alert("Thank you for subscribing!");

        this.reset();

    });

}


/* ==========================================
   AUTO SLIDE FEATURED NEWS
========================================== */

const featuredSlides = document.querySelectorAll(".featured-slide");

let currentSlide = 0;

if (featuredSlides.length > 0) {

    setInterval(() => {

        featuredSlides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= featuredSlides.length) {

            currentSlide = 0;

        }

        featuredSlides[currentSlide].classList.add("active");

    }, 5000);

}


/* ==========================================
   NEWS CARD ANIMATION
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

newsCards.forEach(card => {

    observer.observe(card);

});


/* ==========================================
   END OF NEWS.JS
========================================== */
