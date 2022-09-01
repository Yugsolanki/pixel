import { gsap } from "gsap";

//cursor
document.body.addEventListener("mousemove", event => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
    })
});


const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

hamburger.addEventListener('click', function () {
  this.classList.toggle('active');
  header.classList.toggle('open');
})


$(document).ready(function(){
    $(".more-btn").on('click', function(){
        $(this).parent().parent().find(".more-text").toggleClass("active");
    })
    $(".text").on('mouseover', function (){
        $(".cursor").css({"border-color": "rgb(0,0,0)", "mix-blend-mode": "darken"});
    })
    $(".text").on('mouseout', function (){
        $(".cursor").css({"border-color": "rgb(255,255,255)", "mix-blend-mode": "normal"});
    })
})

/* const more-btns = document.querySelectorAll('.more-btn');
console.log(card);
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        card[i].classList.toggle('expanded');
    })
} */