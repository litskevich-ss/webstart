$(document).ready(function () {

/* Плавно прокручиваем страницу вверх*/
$('#upTop').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
  return false;
});

/* Скрываем иконку прокрутки вверх при открытии страницы*/
$('.upTop').hide();

/* Плавно отображаем иконку при прокрктке вниз и скрываем при прокрутке вверх*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.upTop').fadeIn();
  } else {
    $('.upTop').fadeOut();
  }
});

  /* Скрипт для мобильного меню */
  $('.toogle-button').click(function () {
    $('.navbar').toggleClass('collapsed');
  });
  $('.navbar-nav__item').click(function () {
    $('.navbar').toggleClass('collapsed');
  });

});

/* Инициаизация yandex карты */
ymaps.ready(init);

function init() {
  var myMap;
  $('#map').hover(function () {
    if (!myMap) {
      myMap = new ymaps.Map("map", {
        center: [55.850479, 37.537955],
        zoom: 16.25
      }, {
          searchControlProvider: 'yandex#search'
        });

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        iconCaption: 'Изготовление макетов',
        balloonContentBody: [
          '<address>',
          '<strong>Изготовление макетов любой сложности</strong>',
          '<br/>',
          '<strong>Адрес:</strong> г. Москва, ул. Автомоторная, 4А, стр.21',
          '</address>',
          '<br />',
          '<strong>Телефон:</strong><a href="tel:+74954225131"> +8 (800) 891-33-33</a>'
        ].join('')
      });

      myMap.geoObjects.add(myPlacemark);

      myMap.behaviors.disable('scrollZoom');
    }
  });
};