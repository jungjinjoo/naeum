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

// 탑메뉴 아래로 스크롤 사라졌다가 위로 스크롤 나타남
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }

}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('#header').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('#header').removeClass('nav-up');
    }
  }
  lastScrollTop = st;
}

// 메인배너부분
var swiper = new Swiper(".mySwiper", {
  speed: 1500,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
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
  
  pagination: {// 블릿 버튼
    el: ".eventbox .swiper-pagination",
    clickable: true,
  },
  loop: true,
  navigation: {//화살표 버튼
    nextEl: '.eventbox .swiper-button-next',
    prevEl: '.eventbox .swiper-button-prev',
  },

});

// 리뷰부분
var swiper = new Swiper(".review", {
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  loop: true,
});

