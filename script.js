// get elements from documents
const header = document.getElementsByClassName("header")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const collapsedNav = document.getElementsByClassName("collapsed-nav")[0];
const hamburgerIcon = document.getElementById("hamburger-icon");
const greeting = document.getElementsByClassName("greeting")[0];
const logo = document.getElementsByClassName("logo")[0];
const subtitle = document.getElementsByClassName("subtitle")[0];
const paragraph = document.getElementsByClassName("paragraph")[0];
const body = document.getElementsByClassName("body")[0];
const title = document.getElementsByClassName("title")[0];
const detail = document.getElementsByClassName("detail");
const img = document.getElementsByClassName("img");
const profile = document.getElementsByClassName("profile")[0];
const background = document.getElementsByClassName("background")[0];
const divider = document.getElementById("divider");
const form = document.getElementById("form");
const button = document.getElementById("button");

// create style element in html files
let style = document.createElement("style");
document.head.appendChild(style);

let appearList = [];
// set animation for pages on load
// the order in the array is the order in which each element appear
if (document.getElementsByClassName("home").length > 0) {
	appearList = [greeting, hamburgerIcon, subtitle, background, paragraph, header];
} else if (document.getElementsByClassName("works").length > 0) {
	appearList = [title, hamburgerIcon, subtitle, img, [background, header]];
} else if (document.getElementsByClassName("about").length > 0) {
	appearList = [title, hamburgerIcon, detail, profile, [background, header]];
} else if (document.getElementsByClassName("contacts").length > 0) {
	appearList = [title, hamburgerIcon, detail, [background, header], [divider, form]];
}

// hide the whole page until load
body.classList.add("hidden");

// add the CSS needed for the animation on loop, mainly due to the animation delay time
let rule=''
for (let k = 0; k < appearList.length; k++) {
	if (k == 0){
		rule = `.visible${k}{opacity: 0; animation: fadein 1s ${1 + k * 0.5}s; animation-fill-mode: forwards;}`
	} else {
		rule = `.visible${k}{opacity: 0; animation: fadein 0.5s ${1 + k * 0.5}s; animation-fill-mode: forwards;}`
	}
	style.sheet.insertRule(rule);
}

// function to remove the hidden class and add the visible class according to order in the array
function onPageLoad() {
	body.classList.remove("hidden");
	for (let l = 0; l < appearList.length; l++) {
		let itemAppear = appearList[l]
		if (itemAppear.length > 1) {
			let h=0
			while (h < itemAppear.length) {
				itemAppear[h].classList.add(`visible${l}`)
				h++
			}
		} else {
			itemAppear.classList.add(`visible${l}`);
		}
	}
}

window.onload = onPageLoad;

// open and close the collapsed nav bar
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// get the image for each div in the works page - there are 15 images
for (let i = 1; i < 16; i++) {
	className = `img${i}`;
	fileName = `url("media/images/${i}.png")`;
	if (document.getElementsByClassName("works").length > 0) {
		document.getElementsByClassName(className)[0].style.backgroundImage = fileName;
	}

}

// get comment info into local storage
function storeComment() {
	let nameInput = document.getElementById('name').value;
	let emailInput = document.getElementById('email').value;
	let commentInput = document.getElementById('comment').value;
	window.localStorage.setItem('name', nameInput);
	window.localStorage.setItem('email', emailInput);
	window.localStorage.setItem('comment', commentInput);
}
