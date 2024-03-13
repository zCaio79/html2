// Coleta e atibuição das Seções em variaveis 

// Conteúdo da Home
const promo = document.getElementById("promo");
const extras = document.getElementById("extras");

// Conteúdo da Pagina Masculina, Feminina e Infantil...
const manpage = document.getElementById("manpage");
const womanpage = document.getElementById("womanpage");
const kidspage = document.getElementById("kidspage");

//Coleta dos Botões da Barra de navegação (home, man, woman, e kids)
const navhome = document.getElementById("home");
const navman = document.getElementById("man");
const navwoman = document.getElementById("woman");
const navkids = document.getElementById("kids");

//Adicionei um Evento ao clicar no botão "Home" da Nav e dos demais botões..
navhome.addEventListener('click', function () {

    //Deixa a Seção Home Visivel e as demais invisiveis...
    promo.style.display = "flex";
    extras.style.display = "flex";
    manpage.style.display = "none";
    womanpage.style.display = "none";
    kidspage.style.display = "none";
});

//Evento ao clicar no botão "Man" da Nav
navman.addEventListener('click', function () {

    //Deixa a Seção Man Visivel e as demais invisiveis...
    promo.style.display = "none";
    extras.style.display = "none";
    manpage.style.display = "flex";
    womanpage.style.display = "none";
    kidspage.style.display = "none";
});

//Evento ao clicar no botão 'Woman" da Nav
navwoman.addEventListener('click', function () {

    //Deixa a Seção Woman Visivel e as demais invisiveis...
    promo.style.display = "none";
    extras.style.display = "none";
    manpage.style.display = "none";
    womanpage.style.display = "flex";
    kidspage.style.display = "none";
});

//Evento ao clicar no botão "Kids" da Nav
navkids.addEventListener('click', function () {

    //Deixa a Seção Kids Visivel e as demais invisiveis...
    promo.style.display = "none";
    extras.style.display = "none";
    manpage.style.display = "none";
    womanpage.style.display = "none";
    kidspage.style.display = "flex";
});