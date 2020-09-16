const humburger =document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay =document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const body =document.querySelector("body");
const menu = document.querySelector(".header__menu");

let showMenu =false;

humburger.addEventListener("click",toggleMenu);
function toggleMenu(){
    if(!showMenu){
        header.classList.add("open");
        fadeElements.forEach(function(elem){
            elem.classList.remove("fade-out");
            elem.classList.add("fade-in");
        })
       
        body.classList.add("noscroll");
       
        showMenu=true;
    }else{
        header.classList.remove("open");
        fadeElements.forEach(function(elem){
            elem.classList.remove("fade-in");
            elem.classList.add("fade-out");
        })
   
       body.classList.remove("noscroll");
        showMenu=false;
    }
}
window.addEventListener('resize', reportWindowSize);

function reportWindowSize(){
    var w = window.innerWidth;
    if(w>1023){
        header.classList.remove("open");
        fadeElements.forEach(function(elem){
            elem.classList.remove("fade-in");
           
        })
   
       body.classList.remove("noscroll");
        showMenu=false;
    }
}