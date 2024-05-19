// On load

window.addEventListener("load", () => {
	header();
	hero();
});



// Functions

function header(){
	// Elements

	const header = document.querySelector("header");



	// On scroll

	window.addEventListener("scroll", () => {
		if(window.scrollY > window.innerHeight * .75) header.classList.add("background");
		else if(header.classList.contains("background")) header.classList.remove("background");
	});
}

function hero(){
	// Elements

	const logo = document.querySelector("div.hero img");



	// On scroll

	window.addEventListener("scroll", () => {
		logo.style.scale = 1 + window.scrollY / window.innerHeight;
		logo.style.opacity = 1 - (window.scrollY / window.innerHeight);
	});
}