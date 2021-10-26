// $(function() {
//   // drawer.js
//   $( '.drawer' ).drawer()

// });

jQuery(".drawer_icon").on("click", function (e) {
  e.preventDefault();

  jQuery('.drawer_icon').toggleClass('is-active');
  jQuery('.drawer_content').toggleClass('is-active');
  jQuery('.drawer_background').toggleClass('is-active');

  $('.drawer_content_item').click(function () {
    $('.drawer_icon').trigger('click');
  });
  return false;
});






const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  loopedSlides: 2,
  slidesPerView: 'auto',
  width: 400,
  spaceBetween: 40,
  breakpoints: {
    375: {
      spaceBetween: 20
    },
    767: {
      spaceBetween: 40
    }
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },


});

jQuery(function ($) {
  $('.qa_box_q').on('click', function () {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa_box_p').toggleClass('is_open');
  });

});

//スムーススクロール
jQuery('a[href^="#"]').on('click', function () { //href=#の値を取得したら

  var header = jQuery('.header').innerHeight(); //headerの高さを取得
  var id = jQuery(this).attr('href'); 
  var position = 0; //#だけの場合は0を取得する
  if ( id != '#') { //#だけではないものを取得した場合
    var position = jQuery(id).offset().top - header; //offsetの位置を取得する
  }
  jQuery('html,body').animate({
    scrollTop: position
  },
  400);
});

//totopのボタンをスクロールに応じて表示させる
jQuery(window).on('scroll', function() {
  if ( 200 < jQuery(this).scrollTop()) { //200pxスクロールされた時
    jQuery('.to_top').addClass('is-show'); //is-showというクラスを付与する
  } else {
    jQuery('.to_top').removeClass('is-show'); //200px未満の時、is-showというクラスは外す
  }



});

