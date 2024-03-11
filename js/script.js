 if(swiper){

  var swiper = new Swiper(".swiper-screenshots", {
    loop: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}

let coeurButton = document.querySelector(".bouton-aime");
let coeurIcon = document.querySelector(".bi-heart");

if(coeurIcon){
  coeurButton.addEventListener('click', function () {
    coeurIcon.classList.add("purple");
  })
}
