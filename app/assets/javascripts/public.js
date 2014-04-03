//= require navigation

var $window,$body;

var Site = {
	init: function() {
		$body = $("body"),
		$window = $(window);
    init_navigation();
		Carousel.init();
		
		$("body").fadeIn(3000).css("display", "block");
    $(window).trigger('resize');
	}
}

var Carousel = {
	init: function() {
    // start the carousel if there is more than one image
    // else hide controls
    $('.carousel').each(function(index) {
      var _self = $(this);
      if (_self.find('.item').length > 1) {
        _self.carousel({
          interval: 3000
        });
      } else {
        _self.find('.carousel-control').each(function(index) {
          $(this).css({
            display: 'none'
          })
        })
        _self.find('.carousel-indicators').each(function(index) {
          $(this).css({
            display: 'none'
          })
        })
      }
    })
	} 
}

$(document).ready(function() {
	Site.init();
});