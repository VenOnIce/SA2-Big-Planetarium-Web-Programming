const planetariumnav = document.getElementById("planetariumnav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = ("9 2px 10px rgba(0, 0, 0, 0.2)");
    } else {
        planetariumnav.style.boxShadow = "none";
    }
});
