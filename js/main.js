// swiper 

var swiper = new Swiper('.swiper-container', {
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

// swiper (end)