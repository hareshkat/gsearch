//==========================================================================
//common.js
//==========================================================================

//userAgent
//---------------------------------------------------------
function userAgent() {
  const ua = navigator.userAgent;
  if (ua.indexOf('iPhone') != -1 || ua.indexOf('iPod') != -1 || ua.indexOf('Android') != -1 && ua.indexOf('Mobile') != -1) {
    //sp
    $('body').addClass('is-view-sp');
  } else if (ua.indexOf('iPad') != -1 || ua.indexOf('Android') != -1) {
    //tab
    $('body').addClass('is-view-tab');
  } else {
    // pc
    $('body').addClass('is-view-pc');
  }
}


//userAgentIE
//---------------------------------------------------------
function userAgentIE() {
  const ua = window.navigator.userAgent.toLowerCase();
  const uaVersion = window.navigator.appVersion.toLowerCase();
  //ie
  if (ua.indexOf('msie') != -1 || ua.indexOf('trident') !== -1) {
    $('body').addClass('is-view-ie');
  }
}


//sprite svg
//---------------------------------------------------------
function spriteSvg() {
  $.ajax({
    type: 'get',
    url: '/assets/images/sprite.svg'
  }).done(function(data) {
    var svg = $(data).find('svg');
    $('body').prepend(svg);
  });
}


//menu
//---------------------------------------------------------
function menu() {
  const $menuTrriger = $('.js-menu-trigger');
  const $menuTarget = $('.js-menu-target');
  const $menuBg = $('.js-menu-bg');
  const $menuClose = $('.js-menu-close-trigger');
  let scrollPosition;
  //menuTrriger
  $menuTrriger.on('click', function(){
    if(!$(this).hasClass('is-open')){
      $menuTrriger.addClass('is-open');
      $menuTarget.addClass('is-open');
      $menuBg.addClass('is-open');
      scrollPosition = $(window).scrollTop();
      $('body').addClass('is-locked').css({ 'top': -scrollPosition });
    } else {
      menuClose();
    }
  });
  //menuClose
  $menuClose.on('click', function(){
    menuClose();
  });
  //menuClose
  function menuClose () {
    $menuTrriger.removeClass('is-open');
    $menuTarget.removeClass('is-open');
    $menuBg.removeClass('is-open');
    $('body').removeClass('is-locked').css({ 'top': '' });
    window.scrollTo(0, scrollPosition);
  }
}


// anker
// ---------------------------------------------------
function anker() {
  const headerHeight = $('.l-header').outerHeight();
  $('.js-anker[href^="#"]').click(function () {
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - headerHeight;
    $('html, body').animate({
      scrollTop: position
    },500);
    return false;
  });
}


//animation
//---------------------------------------------------------
function scrollAnimation() {
  const animationTarget = $('.js-animate');
  animationTarget.addClass('is-animate');
  $(window).on('load scroll', function(){
    animationTarget.each(function(){
      let targetPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > targetPos - windowHeight + 100){
        $(this).addClass('is-animated');
      }
    });
  });
}

//accordion
//---------------------------------------------------------
function accordion() {
  $('.js-accordion').on('click', function () {
    if ($(this).hasClass('is-active')) {
      $(this).next().stop().slideUp(300);
      $(this).removeClass('is-active');
    } else {
      $(this).next().stop().slideDown(300);
      $(this).addClass('is-active');
    }
  });
}

//tab
//---------------------------------------------------------
function tab() {
  $('.c-tab-list li').on('click', function () {
    const index = $(this).index();
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
    $(this).parents('.c-tab-01').find('.c-tab-content').removeClass('is-show');
    $(this).parents('.c-tab-01').find('.c-tab-content').eq(index).addClass('is-show');
  });
}


//init
//---------------------------------------------------------
$(function(){
  userAgent();
  userAgentIE();
  spriteSvg();
  menu();
  anker();
  scrollAnimation();
});

$(window).on('load', function () {
  accordion();
  tab();
});


//pagetop
//--------------------------------------------------------
mybutton = document.getElementById("pagetop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



const pagetopbutton = document.getElementById('pagetop');
pagetopbutton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

window.addEventListener('load', function() {
});



//radio
//--------------------------------------------------------
$("[name='check']").on('click', function() {
  if ($(this).prop('checked')){
      $("[name='check']").prop('checked', false);
      $(this).prop('checked', true);
  }
});

//inquiry
//--------------------------------------------------------





