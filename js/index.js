// On load

window.addEventListener("load", async () => {
    // Setup
    header();
    hero();
    //loader();
});



// Setup functions

function header(){
    // Elements

    const header = document.querySelector("header");



    // On scroll

    window.addEventListener("scroll", () => {
        if(window.scrollY > window.innerHeight * .75) header.classList.add("background");
        else if(header.classList.contains("background")) header.classList.remove("background");
    });
}

async function hero(){
    // Elements

    const hero = document.querySelector("div.hero");
    const image = hero.querySelector("img");



    // On scroll

    window.addEventListener("scroll", () => {
        image.style.scale = 1 + window.scrollY / window.innerHeight / 4;
        image.style.opacity = 1 - (window.scrollY / window.innerHeight);
    });
}