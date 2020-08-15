// const { tree } = require("gulp");





// Slow href
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});
// Slow href end


// top arrow
var btn = $("#arrowTop");

$(window).scroll(function() {
  if ($(window).scrollTop() > 2000) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, "500");
});
// tow arrow end



// swiper 
var swiper = new Swiper('.project-swiper-container', {
  direction: 'horizontal',
  slidesPerView: 4,
  slidesPerColumn: 2,
  slidesPerGroup: 4,
  slidesPerColumnFill: "row",
  pagination: {
    el: '.projects-swiper-pagination',
    clickable: true,
    // type: "bullets",
    type: "bullets",
    bulletElement: "span",
    bulletClass: "projects-swiper-bullet",
    bulletActiveClass: "projects-swiper-active-bullet",
  },
});

var blogSwiper = new Swiper('.swiper-container-blog', {
  direction: 'vertical',
  autoHeight: true,
  slidesPerView: 1,
  allowTouchMove: false,
  // slidesPerColumn: 1,
  slidesPerGroup: 1,
  // slidesPerColumnFill: "column",
  // slideClass: "blog-slide",
  pagination: {
    el: '.swiper-pagination-blog',
    clickable: true,
    type: "bullets",
    bulletElement: "span",
    bulletClass: "swiper-bullet-blog",
    bulletActiveClass: "swiper-active-bullet-blog",
  },
  // nested: false,
  
});
// swiper (end)

