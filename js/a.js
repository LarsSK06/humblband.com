// On load

window.addEventListener("load", () => {
    menu();
});



// Functions

function menu(){
    // Elements
    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");


    // On click
    button.addEventListener("click", () => {
        if(menu.classList.contains("disabled")) menu.classList.remove("disabled");
        else menu.classList.add("disabled");
    });
}