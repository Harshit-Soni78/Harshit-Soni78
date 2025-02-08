function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function themechange() {
    let theme = document.getElementById("icon")
    theme.onclick = function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            icon.src = "./imgs/sun.png";
        } else {
            icon.src = "./imgs/moon.png";
        }
    }
}