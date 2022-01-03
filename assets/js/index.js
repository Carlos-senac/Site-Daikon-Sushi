/*                                             Definitions
==========================================================*/

// menu -->
const btnMenu = document.querySelector("header nav button.toggle-menu");
const menu = document.querySelector("header nav .menu");
const linksMenu = document.querySelectorAll("header nav .menu a");


//  ScrollReveal ###

const scrollReveal = ScrollReveal({
    // origin: "left",
    distance: "25px",
    duration: 700,
    reset: true,
    opacity: 0
});

/*                                             Functions
==========================================================*/

// menu -->
function openMenu() {

    menu.classList.forEach((value) => {

        if (value == "open") {
            menu.classList.remove("open");
            btnMenu.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="black"/>
            </svg>
            `

        } else {
            menu.classList.add("open");
            btnMenu.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
            </svg>
            `
        }
    })
}


/*                                             Events
==========================================================*/

window.addEventListener("load", () => {
    if (window.outerWidth < 740) {
        linksMenu.forEach((element) => {
            element.addEventListener("click", openMenu);
        })
    }


    //ScrollReveal -->

    scrollReveal.reveal(`
header .logo, header .menu ul li, header .container>div:last-child

 `, {
        interval: 50,
        origin: "left",
        reset: false
    });

    scrollReveal.reveal(`
.text h2, .text p, .text a,
.popular .container>div:last-child .card >div:last-child,
.statistics .container>div:last-child .card,
.ceo .container img,
.footer-part-1>div:first-child >div:first-child, .footer-part-1>div:last-child div

`, {
        interval: 50,
        origin: "left"
    });

    scrollReveal.reveal(`
.popular .container>div:last-child .card img,
.about-sushi-1 .container>div:first-child img,
.about-sushi-2 .container>div:last-child img,
.ceo .container>div:last-child h2, .ceo .container>div:last-child p,
.email .container>div:last-child div,
.footer-part-1 .social ul li
 `, {
        interval: 50,
        origin: "bottom"
    });

});


// menu -->
btnMenu.addEventListener("click", openMenu);