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
// top arrow end



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

var modal = document.querySelector(".modal-thank");
var modalBtn = document.querySelector(".modal-thank__button");



$(".contactForm").validate({
  errorClass: "error-input",
  
  rules: {
   
    userName: {
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    userPhone: {
      required: true,
      // minlength: 2,
      // maxlength: 100,
    },
    userEmail: {
      required: true,
      email: true,
      maxlength: 100,
    },

    userMassage: {
      required: true,
      maxlength: 300,
    },
    
  },

  messages: {
    userName: {
      required: "Name is required",
      minlength: "Full Name",
    },
    userPhone: {
      required: "Phone is required",
    },
    userEmail: {
      required: "Email is required",
      email: "Format-Example: name@domain.com",
    },
    userMassage: {
      required: "Type your massage",
      maxlength: "Too much!",
    },
  },

  submitHandler: function(form) {
  $.ajax({
    type: "POST",
    url: "send.php",
    data: $(form).serialize(),
    // dataType: "dataType",
    success: function (response) {
      console.log("#1 Ajax worked, answer server:" + response);
      modal.style.visibility="visible";
      $(form)[0].reset();
    },
    error: function (response) {
      console.log("#1 The form does't work" + response);
    }
  });
  }

 });


 // mask for phone input (start)

 $('[type=tel]').mask('+1 (000) 000-0000', {placeholder: "+1 (___) ___-____"});

 // mask for phone input (end)



 modalBtn.onclick = function (event) {
   if (event.target == modalBtn)
   modal.style.visibility="hidden";
 };


