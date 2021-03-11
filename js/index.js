const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png",
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png",
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io",
	},
	footer: {
		copyright: "Copyright Great Idea! 2018",
	},
};

//create objects
const navName = [
	"Services",
	"Product",
	"Vision",
	"Features",
	"About",
	"Contact",
];

const content = [
	{
		title: "Features",
		description:
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	{
		title: "About",
		description:
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	{
		title: "Services",
		description:
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	{
		title: "Product",
		description:
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	{
		title: "Vision",
		description:
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
];

//declare variable
let nav = document.getElementsByTagName("NAV")[0].children;
let logo = document.getElementById("logo-img");
let middleimg = document.getElementById("middle-img");
let mainContent = document.getElementsByClassName("main-content");
let bottomContent = document.getElementsByClassName("bottom-content");
let text = document.getElementsByTagName("H1")[0];
let icon = document.getElementById("cta-img");
let button = document.getElementsByTagName("BUTTON")[0];
let headerText = document.getElementsByTagName("H4");
let paragraph = document.getElementsByTagName("P");

for (let i = 0; i < nav.length; i++) {
	nav[i].innerHTML = navName[i];
}

logo.setAttribute("src", siteContent["nav"]["img-src"]);
middleimg.src = "./img/mid-page-accent.jpg";
logo.src = "./img/logo.png";
text.innerHTML = "DOM" + "<br />" + "IS" + "<br />" + "AWESOME";
icon.src = "./img/header-img.png";
button.innerHTML = "Get Started";

for (let i = 0; i < 5; i++) {
	headerText[i].innerHTML = content[i].title;
	paragraph[i].innerHTML = content[i].description;
}

headerText[5].innerHTML = "CONTACT";
paragraph[5].innerHTML = "123 Way 456 Street" + "<br />" + "Somewhere, USA";
paragraph[6].innerHTML = "1 (888) 888-8888";
paragraph[7].innerHTML = "sales@greatidea.io";
paragraph[8].innerHTML = "Copyright Great Idea! 2018";
