// ===========================scrollify
// (function ($) {
//    $.scrollify({
//       section: '.sectionss',
//    });
// })(jQuery);

// ===================scrollFullPage
// $(document).ready(function () {
//    $('#fullpage').fullpage({
//       // options here
//       // autoScrolling: true,
//       // scrollHorizontally: true,
//    });

//    //  methods;
//    //  $.fn.fullpage.setAllowScrolling(false);
// });

// =====================onepage-scroll

(function ($) {
   $('.main').onepage_scroll({
      sectionContainer: '.sections', // контейнер, к которому будет применяться скролл
      easing: 'ease', // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
      animationTime: 1000, // время анимации
      pagination: true, // скрыть или отобразить пагинатор
      updateURL: false, // обновлять URL или нет
   });
})(jQuery);
