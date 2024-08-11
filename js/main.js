// Toggle Menu
const toggleBar = document.querySelector('.js-bar');
const menu = document.querySelector('.js-menu');
const toggleClose = document.querySelector('.js-close');

toggleBar.addEventListener('click', function () {
  menu.classList.add('active');
});

toggleClose.addEventListener('click', function () {
  menu.classList.remove('active');
});

// Slick Slider
$(document).ready(function () {
  $('.explore-main').slick({
    slidesToShow: 3,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: true,
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// Open Video
const modal = document.querySelector('.js-modal');
const openVideo = document.querySelectorAll('.js-open-video');
const modalClose = document.querySelector('.js-modal-close');

[...openVideo].forEach((item) =>
  item.addEventListener('click', function () {
    modal.classList.add('active');
  })
);

modalClose.addEventListener('click', function () {
  modal.classList.remove('active');
});

document.body.addEventListener('click', function (e) {
  if (e.target.matches('.js-modal')) {
    modal.classList.remove('active');
  }
});
