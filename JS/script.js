const elements = {
    date: document.querySelector(".date"),

    scrollLinks: document.querySelectorAll(".navbar-list-link"),
    navbarList: document.querySelector(".navbar-list"),
    toggle: document.querySelector(".navbar-button"),
}

elements.date.innerHTML = new Date().getFullYear();

elements.scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        elements.navbarList.classList.remove("navbar-list--show-links");

        const id = link.getAttribute("href");
        const element = document.querySelector(id);

        const position = element.offsetTop - 75;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

        e.preventDefault();
    });
});

elements.toggle.addEventListener("click", e => {
    elements.navbarList.classList.toggle("navbar-list--show-links");
});