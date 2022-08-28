import { gsap } from "gsap";
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


let logo = gsap.timeline({
    scrollTrigger: {
      trigger: '.landing-page',
      start: "top top",
      //pin: true,
      endTrigger: '#pixel-logo',
      end: "top 50%",
      toggleActions: "play none stop none",
      //markers: true,
      scrub: 1
    }
  });
  
  let buildings = gsap.timeline({
    scrollTrigger: {
      trigger: '.landing-page',
      start: "top top",
      pin: true,
      end: "bottom top",
      //markers: true,
      scrub: 1
    }
  });

  let gallery = gsap.timeline({
    scrollTrigger: {
      trigger: '.gallery',
      start: "top top",
      pin: true,
      end: "bottom top",
      //markers: true,
      scrub: 20
    }
  });
  
  /* let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.content',
      start: "top 75%",
      end: "top 10%",
      toggleActions: "restart reverse restart reverse",
    }
  });
   */
  
  buildings.to('#buildings', {scale: 1.1, y: -20});
  logo.to('#pixel-logo', {y: -400, scale: 2.15});
  gallery.to('.container', {x: -15000})
  
  gsap.from('.content h1', {
    x: -400,
    scrollTrigger: {
      trigger: '.content',
      start: "top 75%",
      end: "top 10%",
      toggleActions: "restart reverse restart reverse",
    }
  });
  gsap.from('.content p', {
    x: -1000,
    scrollTrigger: {
      trigger: '.content',
      start: "top 75%",
      end: "top 10%",
      toggleActions: "restart reverse restart reverse",
    }
  });