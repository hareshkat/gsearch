//==========================================================================
//top.js
//==========================================================================

//serviceList
//---------------------------------------------------------
function serviceList() {
  const serviceListImg = $(".service-list__img img");

  $(window).on('scroll', function () {
    if ($(window).scrollTop() < $('#service_list01').offset().top) {
      $('.service-list__img, .service-list__index').removeClass('is-show');
      $('#service_list01').removeClass('is-show');
    }
    if ($(window).scrollTop() > $('#service_list01').offset().top) {
      $('.service-list__img, .service-list__index').addClass('is-show');
      serviceListImg.attr('src', '/assets/images/top/service_list01.jpg');
      $('#service_list02, #service_list03, #service_list04, #service_list05, #service_list06').removeClass('is-show');
      $('#service_list01, .service-list__img').addClass('is-show');
      $('.index02, .index03, .index04, .index05, .index06').removeClass('is-active');
      $('.index01').addClass('is-active');
    }
    if ($(window).scrollTop() > $('#service_list02').offset().top) {
      serviceListImg.attr('src', '/assets/images/top/service_list02.jpg');
      $('#service_list01, #service_list03, #service_list04, #service_list05, #service_list06').removeClass('is-show');
      $('#service_list02, .service-list__img').addClass('is-show');
      $('.index03, .index04, .index05, .index06').removeClass('is-active');
      $('.index02').addClass('is-active');
    }
    if ($(window).scrollTop() > $('#service_list03').offset().top) {
      serviceListImg.attr('src', '/assets/images/top/service_list03.jpg');
      $('#service_list01, #service_list02, #service_list04, #service_list05, #service_list06').removeClass('is-show');
      $('#service_list03, .service-list__img').addClass('is-show');
      $('.index04, .index05, .index06').removeClass('is-active');
      $('.index03').addClass('is-active');
    }
    if ($(window).scrollTop() > $('#service_list04').offset().top) {
      serviceListImg.attr('src', '/assets/images/top/service_list04.jpg');
      $('#service_list01, #service_list02, #service_list03, #service_list05, #service_list06').removeClass('is-show');
      $('#service_list04, .service-list__img').addClass('is-show');
      $('.index05, .index06').removeClass('is-active');
      $('.index04').addClass('is-active');
    }
    if ($(window).scrollTop() > $('#service_list05').offset().top) {
      serviceListImg.attr('src', '/assets/images/top/service_list05.jpg');
      $('#service_list01, #service_list02, #service_list03, #service_list04, #service_list06').removeClass('is-show');
      $('#service_list05, .service-list__img').addClass('is-show');
      $('.index06').removeClass('is-active');
      $('.index05').addClass('is-active');
    }
    if ($(window).scrollTop() > $('#service_list06').offset().top) {
      serviceListImg.attr('src', '/assets/images/top/service_list06.jpg');
      $('#service_list01, #service_list02, #service_list03, #service_list04, #service_list05').removeClass('is-show');
      $('#service_list06, .service-list__img').addClass('is-show');
      $('.index06').addClass('is-active');
    }
    if ($(window).scrollTop() > $('#service_list06').offset().top + $('#service_list06').height() - $(window).height()) {
      $('#service_list06').removeClass('is-show');
      $('.service-list__img, .service-list__index').removeClass('is-show');
    }
  })
}

//columnList
//---------------------------------------------------------
function columnList() {
  var slider = new Swiper('.column__list', {
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
    spaceBetween: 55,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // 枚数表示
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { // ブレークポイント
      768: { // 画面幅600px以上で適用
        slidesPerView: 3,
      }
    },
  });
}

//loading
//---------------------------------------------------------
function loading() {
  $('.l-page').addClass('is-loaded');
  setTimeout(() => {
    $('.loading').addClass('is-hide');
  }, 1500);
}

//headerFixed
//---------------------------------------------------------
function headerFixed() {
  if ($(window).scrollTop() > $('.mv').height()) {
    $('.l-header').addClass('is-fixed');
  } else {
    $('.l-header').removeClass('is-fixed');
  }
}

//init
//---------------------------------------------------------
$(function () {
  columnList();
});

$(window).on('load', function () {
  loading();
  serviceList();
});

$(window).on('scroll', function () {
  headerFixed();
});










