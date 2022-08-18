import { gsap } from "gsap";

const landing = document.querySelector(".landing-page");

document.body.addEventListener("mousemove", event => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
    })

    gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
    });
});