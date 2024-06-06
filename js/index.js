// On load

window.addEventListener("load", () => {
    hero();
});



// Functions

function hero(){
    // Elements
    const image = document.querySelector("#band-img");


    // On scroll
    window.addEventListener("scroll", () => {
        image.style.scale = 1 + (window.scrollY / 2000);
    });
}