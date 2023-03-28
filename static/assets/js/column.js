//==========================================================================
//column.js
//==========================================================================
const swiper = new Swiper(".swiper", {
  loop: true,
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // クリック有効化
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // スクロールバー
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


const CHANGE_WIDTH = 767;
const ADD_CLASS = "swiper-wrapper"

$(window).on('load resize', function(){
  var i_width = $(window).outerWidth(true);
  if(i_width > CHANGE_WIDTH){
    if($('.column-nav-wrapper').hasClass(ADD_CLASS)){
      $('.column-nav-wrapper').eq(0).removeClass(ADD_CLASS);
    }
  } else {
    if(!$('.column-nav-wrapper').hasClass(ADD_CLASS)){
      $('.column-nav-wrapper').eq(0).addClass(ADD_CLASS);
    }
  }
});