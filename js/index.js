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
		if(window.scrollY <= document.documentElement.clientHeight){
			if(header.classList.contains("background")) header.classList.remove("background");
		}
		else header.classList.add("background");
	});
}

function hero(){
	// Elements

	const hero = document.querySelector("div.hero");
	const controls = hero.querySelector("div.controls");
	const content = hero.querySelector("div.frame div.content");
	const children = content.querySelectorAll("img");



	// Variables

	let index = 0;
	let interval = createInterval();



	// Controls

	controls.querySelector("div.button-container.left button").addEventListener("click", () => {
		clearInterval(interval);
		interval = createInterval();
		left();
	});

	controls.querySelector("div.button-container.right button").addEventListener("click", () => {
		clearInterval(interval);
		interval = createInterval();
		right();
	});



	// Functions

	function right(){
		if(index == children.length - 1) index = 0;
		else index++;
		move();
	}

	function left(){
		if(index == 0) index = children.length - 1;
		else index--;
		move();
	}

	function move(){
		content.style.left = `-${index * 100}%`;
	}

	function createInterval(){
		return setInterval(right, 6000);
	}
}