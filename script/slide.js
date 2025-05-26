$(function () {
    $(".nav>li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown();
    })

    $(".nav>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    })
});

// 내 js
    AOS.init({
      duration: 1500,
      offset: 300,
      easing: 'ease-out-back',
    });

// 메인배너부분
  var swiper = new Swiper(".mySwiper", {
      speed: 1000,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },


    });

// 뉴아이템부분
    var swiper = new Swiper(".new", {
      speed: 1000,
      effect: "fade",
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      mousewheel: true,
      keyboard: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

// 이벤트부분
  var swiper = new Swiper(".event", {
      slidesPerView: 2,
      spaceBetween: 10,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });

// 리뷰부분
var swiper = new Swiper(".review", {
      slidesPerView: 5,
      spaceBetween: 10,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });