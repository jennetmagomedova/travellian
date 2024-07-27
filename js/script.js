//datapickers for book form
$(function () {
  $("#checkIn").datepicker({
    altField: "#checkIn",
    altFormat: "D, dth M yy",
  });
});

$(function () {
  $("#checkOut").datepicker({
    altField: "#checkOut",
    altFormat: "D, dth M yy",
  });
});

//swipper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
