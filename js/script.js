$(function () {
  $("#checkIn").datepicker({
    minDate: 0,
    altField: "#checkIn",
    altFormat: "D, dth M yy",
    firstDay: 1,
    onSelect: function (selected) {
      var dt = new Date(selected);
      dt.setDate(dt.getDate() + 1);
      $("#checkOut").datepicker("option", "minDate", dt);
    },
  });
});

$(function () {
  $("#checkOut").datepicker({
    altField: "#checkOut",
    altFormat: "D, dth M yy",
    firstDay: 1,
  });
});

//swipper
const popularSwiper = new Swiper("#swiperPopular", {
  // Optional parameters
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: "#popular-next",
    prevEl: "#popular-prev",
  },
});

const offerSwiper = new Swiper("#offerSwiper", {
  // Optional parameters
  slidesPerView: "auto",
  loop: false,
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: "#offer-next",
    prevEl: "#offer-prev",
  },
});

const reviewsSwiper = new Swiper("#reviewSwiper", {
  // Optional parameters
  slidesPerView: "auto",
  loop: false,
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: "#reviews-next",
    prevEl: "#reviews-prev",
  },
});
