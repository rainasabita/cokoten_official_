// GLOBAL (biar bisa dipakai semua function)
let slideIndex = 1;
let slideTimer;

// Jalankan setelah HTML siap
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
    autoSlide();
});

function plusSlides(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex += n);
    autoSlide();
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n);
    autoSlide();
}

function autoSlide() {
    slideTimer = setTimeout(() => {
        showSlides(slideIndex += 1);
        autoSlide();
    }, 4000);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return; // biar nggak error kalau belum ada

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}


// DETAIL PRODUK
function showDetail(num) {
    document.getElementById("page-index").style.display = "none";
    document.getElementById("page-detail").style.display = "block";

    document.getElementById("detail1").style.display = "none";
    document.getElementById("detail2").style.display = "none";
    document.getElementById("detail3").style.display = "none";

    document.getElementById("detail" + num).style.display = "block";

    window.scrollTo(0, 0);
}

function goBack() {
    document.getElementById("page-index").style.display = "block";
    document.getElementById("page-detail").style.display = "none";

    document.getElementById("detail1").style.display = "none";
    document.getElementById("detail2").style.display = "none";
    document.getElementById("detail3").style.display = "none";

    window.scrollTo(0, 0);
}
