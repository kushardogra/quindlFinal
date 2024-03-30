$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768,2],
      itemsMobile:[650,1],
      pagination:true,
      autoPlay:true
  });
});
const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

var direction = -1;

prev.addEventListener("click", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    direction = 1;
  }

  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(20%)";
});

next.addEventListener("click", function () {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
    carousel.style.justifyContent = "flex-start";
    direction = -1;
  }
  slider.style.transform = "translate(-20%)";
});

slider.addEventListener("transitionend", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }

  slider.style.transition = "none";
  slider.style.transform = "translate(0)";
  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});