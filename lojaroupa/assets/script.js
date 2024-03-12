const promo = document.getElementById("promo");
const extras = document.getElementById("extras");
const manpage = document.getElementById("manpage");
const womanpage = document.getElementById("womanpage");
const kidspage = document.getElementById("kidspage");

const navhome = document.getElementById("home");
const navman = document.getElementById("man");
const navwoman = document.getElementById("woman");
const navkids = document.getElementById("kids");

navhome.addEventListener('click', function () {
    promo.style.display = "flex";
    extras.style.display = "flex";
    manpage.style.display = "none";
    womanpage.style.display = "none";
    kidspage.style.display = "none";
});
navman.addEventListener('click', function () {
    promo.style.display = "none";
    extras.style.display = "none";
    manpage.style.display = "flex";
    womanpage.style.display = "none";
    kidspage.style.display = "none";
});
navwoman.addEventListener('click', function () {
    promo.style.display = "none";
    extras.style.display = "none";
    manpage.style.display = "none";
    womanpage.style.display = "flex";
    kidspage.style.display = "none";
});
navkids.addEventListener('click', function () {
    promo.style.display = "none";
    extras.style.display = "none";
    manpage.style.display = "none";
    womanpage.style.display = "none";
    kidspage.style.display = "flex";
});