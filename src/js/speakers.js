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


const card = document.querySelectorAll('.card_inner');
console.log(card);
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        card[i].classList.toggle('is-flipped');
    })
}