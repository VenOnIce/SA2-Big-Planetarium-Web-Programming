const tablenav = document.querySelector(".tablenav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        tablenav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.22)";
    } else {
        tablenav.style.boxShadow = "none";
    }
});