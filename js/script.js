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
