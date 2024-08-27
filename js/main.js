let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
const cart_number = document.querySelector(".cart-number");
const item_btn = document.querySelector(".item-btn");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};

// Scroll Reveal
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1600,
  delay: 300,
});

animate.reveal(".home-text", { origin: "left" });
animate.reveal(".home-img", { origin: "bottom" });
animate.reveal(".heading, .newsletter h2,p", { origin: "top" });
animate.reveal(
  "header, .feature-box, .feature-menu-box, .item-box, .m-item-box, .t-box, .newsletter form",
  { interval: 100 }
);

count = 0;

item_btn.addEventListener("click", (e)=>{
  e.preventDefault();
  count++;
  cart_number.innerHTML = count;
})