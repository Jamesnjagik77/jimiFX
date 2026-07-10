// =========================================
// Jimi FX - script.js
// =========================================

// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Mobile Navigation Toggle
const nav = document.querySelector("nav");

const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.className = "menu-btn";

header.prepend(menuBtn);

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Smooth Scrolling
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });
});

// Animate Market Cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.6s";

observer.observe(card);

});

// Fake Live Prices Demo
const prices = document.querySelectorAll(".card p");

setInterval(()=>{

prices.forEach(price=>{

let value=parseFloat(price.innerText.replace(/[^0-9.]/g,""));

if(!isNaN(value)){

let random=(Math.random()*2-1);

value=value+random;

if(price.innerText.includes("$")){

price.innerText="$"+value.toFixed(2);

}else{

price.innerText=value.toFixed(4);

}

}

});

},3000);

// Hero Button
const heroBtn=document.querySelector(".btn");

if(heroBtn){

heroBtn.addEventListener("click",()=>{

alert("Welcome to Jimi FX! More features coming soon.");

});

}

// Footer Year
const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Jimi FX. All Rights Reserved.";

}

// Contact Animation
const contact=document.querySelector(".contact-box");

if(contact){

contact.addEventListener("mouseover",()=>{

contact.style.transform="scale(1.03)";

contact.style.transition=".4s";

});

contact.addEventListener("mouseout",()=>{

contact.style.transform="scale(1)";

});

}

// News Cards Hover
document.querySelectorAll(".news-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 20px #0057ff";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});

console.log("Jimi FX Website Loaded Successfully");
