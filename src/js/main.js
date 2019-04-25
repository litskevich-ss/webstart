
$(document).ready(function () {

  /* Плавная прокрутка до якоря */
  $(".go_to").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  /* Плавно прокручиваем страницу вверх*/
  $('#upTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);

    $('.navbar').toggleClass('collapsed');
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

  /* Инициализация WOW.js */
  new WOW().init();

  /* Скрипт для мобильного меню */
  $('.toogle-button').click(function () {
    $('.navbar').toggleClass('collapsed');
  });
  $('.navbar-nav__item').click(function () {
    $('.navbar').toggleClass('collapsed');
  });

  /* Маска для телефона*/
  $('.phone').mask('+7 (999) 999-99-99');

  /* Валидация форм */
  var validator1 = $('#request-form').validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      user_phone: {
        required: true
      },
      user_email: {
        required: true,
        email: true
      }
    },
    messages: {
      user_name: {
        required: "Заполните поле",
        minlength: "Поле должно содержать минимум 2 символа",
        maxlength: "Поле не должно превышать 15 символов"
      },
      user_phone: "Заполните поле",
      user_email: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    errorClass: "invalid",
    errorElement: "div"
  });

  var validator2 = $('#modal-form').validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      user_phone: {
        required: true
      },
      user_email: {
        required: true,
        email: true
      }
    },
    messages: {
      user_name: {
        required: "Заполните поле",
        minlength: "Поле должно содержать минимум 2 символа",
        maxlength: "Поле не должно превышать 15 символов"
      },
      user_phone: "Заполните поле",
      user_email: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    errorClass: "invalid",
    errorElement: "div"
  });

  /* Инициализация слайдера */
  $('.projects .slider__items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<img class='prev slick-prev' src='img/left-arrow.svg'>",
    nextArrow: "<img class='next slick-next' src='img/right-arrow.svg'>"
  });

  $('.clients .slider__items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: "<img class='prev slick-prev' src='img/left-arrow.svg'>",
    nextArrow: "<img class='next slick-next' src='img/right-arrow.svg'>"
  });

  /* Модальное окно */
  var modal = $('#modal');
  var closeModalButton = $('#close');
  var callme = $('.call__dialog');
  var actionButton = $('.modal__button');

  actionButton.on('click', function () {

    callme.removeClass("animated").addClass("animated");

    var modalType = $(this).data('modal-type');

    switch (modalType) {
      case 'modal-1':
        $('#modal').find('.modal-dialog__title').html('Заказать обратный звонок');
        $('#modal').find('.accept__button').html('Заказать');
        break;
      case 'modal-2':
        $('#modal').find('.modal-dialog__title').html('Заявка на расчет стоимости макета');
        $('#modal').find('.accept__button').html('Оставить заявку');
        break;
      case 'modal-3':
        $('#modal').find('.modal-dialog__title').html('Рассчитать стоимость макета');
        $('#modal').find('.accept__button').html('Рассчитать');
        break;
      case 'modal-4':
        $('#modal').find('.modal-dialog__title').html('Заказать макет');
        $('#modal').find('.accept__button').html('Заказать');
        break;
    }

    modal.addClass('modal_active');
  });

    closeModalButton.on('click', function () {
    modal.removeClass('modal_active');

      $('#modal').find('.modal__form')[0].reset();
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