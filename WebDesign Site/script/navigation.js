const menuIcon = document.querySelector(".hamb-menu");
const mainNav = document.querySelector(".main-nav");
const mobileNav = document.querySelector(".mobile-nav");

const openMobileNavMenu = () => {
    console.log("changing to flex")

    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}

const handleResize = () => {
    if (window.innerWidth > 500) {
        mobileNav.style.display = "none"
    }
}


window.addEventListener("resize", handleResize)

menuIcon.addEventListener('click', openMobileNavMenu);