window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navshadow.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.22)";
    } else {
        navshadow.style.boxShadow = "none";
    }
});

