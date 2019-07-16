/*
-  index.js file will serve as a file to create all jquery animations
- Plugins used are:
-- jqFloat.js
-- owlCarousel.js
-- Lettering.js
*/

(function ($) {

  $(".section-title").lettering();

  /**
    - Make the title character bounce onload of the page
  */
  $('.section-title').effect("bounce", {
    times: 4,
    distance: 200
  }, 400).click(function() {
    $(this).effect("bounce", {
      times: 4,
      distance: 200
    }, 400);
  });

  /**
    - Slow scroll to Anchors
  */
  $('a[href^="#"]').on('click', function(e){

      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      jQuery('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  /**
  * - Masonry Library
  * - Add masonry to portfolio section
  */
  $('.portfolio .proj-wrapper').masonry({
    itemSelector: '.item',
  });

});
