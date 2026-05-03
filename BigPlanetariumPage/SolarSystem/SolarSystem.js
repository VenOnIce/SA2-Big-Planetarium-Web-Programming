const solarsystemnav = document.querySelector(".solarsystemnav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        solarsystemnav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.22)";
    } else {
        solarsystemnav.style.boxShadow = "none";
    }
});