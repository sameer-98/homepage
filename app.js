const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");

if (!window.location.href.includes("news.html"))
{

    window.addEventListener("scroll", () => {

        if ((document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100))
        {
            navbar.classList.add("navbar-light","bg-white");
            navbar.classList.remove("bg-transparent","navbar-dark");
        }
        else
        {
            navbar.classList.add("bg-transparent","navbar-dark");
            navbar.classList.remove("navbar-light","bg-white");
        }
    })
}

navLinks.forEach(link => {
    console.log(typeof(window.location.href))
    if(link.href === window.location.href)
    {
        link.setAttribute('aria-current','page')
    }
});