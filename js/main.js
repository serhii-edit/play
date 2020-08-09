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
  // slidesPerColumn: 1,
  slidesPerGroup: 1,
  // slidesPerColumnFill: "row",
  pagination: {
    el: '.swiper-pagination-blog',
    clickable: true,
    type: "bullets",
    bulletElement: "span",
    bulletClass: "swiper-bullet-blog",
    bulletActiveClass: "swiper-active-bullet-blog",
  },
});

// swiper (end)