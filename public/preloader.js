var preloader = document.querySelector(".preloader");
var website = document.querySelector(".site");
var html = document.querySelector("html");
var lak= document.querySelector(".lak")
let navMenu = document.querySelector(".navMenu");

preloaderVar = setTimeout(preloaderFunc, 2600);

function preloaderFunc() {
    preloader.style.display = "none";
    website.style.display = "block";
    html.style.overflowY = "scroll";
    html.style.overflowX = "none";
    lak.style.display= "none";
} 

let questionElement = document.querySelector(".questionPre")
var question = ['Sit Tight, You are about to see something great!']


randomQuestion =  question[Math.floor(Math.random() * question.length)];
questionElement.innerHTML = randomQuestion

