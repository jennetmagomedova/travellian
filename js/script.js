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

//swipers
const swipers = document.querySelectorAll(".swiper");
swipers.forEach((swiper) => {
  const controls = swiper.previousElementSibling;
  new Swiper(swiper, {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,

    navigation: {
      nextEl: controls.querySelector(".swiper-button-next"),
      prevEl: controls.querySelector(".swiper-button-prev"),
    },
  });
});
