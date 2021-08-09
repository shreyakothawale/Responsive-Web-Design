$(document).ready(function () {
  $("#bar").mCustomScrollbar({
    theme: "minimal" });


  $('#sidebarCollapse').on('click', function () {
    $('#navbar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});