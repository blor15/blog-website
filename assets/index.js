let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener("click", function () {
  collapse.forEach((col) => col.classList.toggle("collapse-toggle"));
  console.log(collapse);
});

// Masonry library
new Masonry("#posts .grid", {
  itemSelector: ".grid-item",
  gutter: 20,
});

// initializing Swiper

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  autoplay: {
    delay: 3000,
  },
  // responsive breakpoints
  breakpoints: {
    "@0": {
      slidesPerView: 2,
    },
    "@1.00": {
      slidesPerView: 3,
    },
    "@1.25": {
      slidesPerView: 4,
    },
    "@1.50": {
      slidesPerView: 5,
    },
  },
});
