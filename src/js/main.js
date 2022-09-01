import { gsap, interpolate } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

hamburger.addEventListener('click', function () {
  this.classList.toggle('active');
  header.classList.toggle('open');
})


//cursor
document.body.addEventListener("mousemove", event => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
    })
});

  gsap.from('.content h1', {
    x: -400,
    scrollTrigger: {
      trigger: '.content',
      start: "top 80%",
      end: "top 5%",
      //pinSpacing: true,
      toggleActions: "restart reverse restart reverse",
      //markers: true
    }
  });
  gsap.from('.content p', {
    x: -1000,
    scrollTrigger: {
      trigger: '.content p',
      start: "top 80%",
      end: "top 5%",
      //pinSpacing: true,
      toggleActions: "restart reverse restart reverse",
      //markers: true
    }
  });

  gsap.to('#pixel-logo', {
    y: -350,
    scale: 2,
    duration: 2
  })



/*----------------------------------------------********************************************************************************slider***************************************----------------------------------------------------*/




/*----------------------------------------------********************************************************************************Card***************************************----------------------------------------------------*/

$(document).ready(function(){
  $(".text").on('mouseover', function (){
      $(".cursor").css({"border-color": "rgb(0,0,0)", "mix-blend-mode": "darken"});
  })
  $(".text").on('mouseout', function (){
      $(".cursor").css({"border-color": "rgb(255,255,255)", "mix-blend-mode": "normal"});
  })
})