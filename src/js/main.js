$(document).ready(function () {
  $('.toogle-button').click(function () {
    $('.navbar').toggleClass('collapsed');
  });
  $('.navbar-nav__item').click(function () {
    $('.navbar').toggleClass('collapsed');
  });
});