//= require gko/gko.galleria

$(document).ready(function() {

	function init() {
		 Galleria.addTheme({
	        name:'classic',
	        author:'Galleria',
	        css:'galleria.classic.css',
	        defaults:{
	            transition:'slide',
	            thumbCrop:'height',

	            // set this to false if you want to show the caption all the time:
	            _toggleInfo:false
	        },
	        init:function (options) {

	            // add some elements
	            this.addElement('info-link', 'info-close');
	            this.append({
	                'info':['info-link', 'info-close']
	            });

	            // cache some stuff
	            var info = this.$('info-link,info-close,info-text'),
	                touch = Galleria.TOUCH,
	                click = touch ? 'touchstart' : 'click';

	            // show loader & counter with opacity
	            this.$('loader,counter').show().css('opacity', 0.4);

	            // some stuff for non-touch browsers
	            if (!touch) {
	                this.addIdleState(this.get('image-nav-left'), { left:-50 });
	                this.addIdleState(this.get('image-nav-right'), { right:-50 });
	                this.addIdleState(this.get('counter'), { opacity:0 });
	            }

	            // toggle info
	            if (options._toggleInfo === true) {
	                info.bind(click, function () {
	                    info.toggle();
	                });
	            } else {
	                info.show();
	                this.$('info-link, info-close').hide();
	            }

	            // bind some stuff
	            this.bind('thumbnail', function (e) {

	                if (!touch) {
	                    // fade thumbnails
	                    $(e.thumbTarget).css('opacity', 0.6).parent().hover(function () {
	                        $(this).not('.active').children().stop().fadeTo(100, 1);
	                    }, function () {
	                        $(this).not('.active').children().stop().fadeTo(400, 0.6);
	                    });

	                    if (e.index === this.getIndex()) {
	                        $(e.thumbTarget).css('opacity', 1);
	                    }
	                } else {
	                    $(e.thumbTarget).css('opacity', this.getIndex() ? 1 : 0.6);
	                }
	            });

	            this.bind('loadstart', function (e) {
	                if (!e.cached) {
	                    this.$('loader').show().fadeTo(200, 0.4);
	                }

	                this.$('info').toggle(this.hasInfo());

	                $(e.thumbTarget).css('opacity', 1).parent().siblings().children().css('opacity', 0.6);
	            });

	            this.bind('loadfinish', function (e) {
	                this.$('loader').fadeOut(200);
	            });
	        }
	    });

		$(".galleria").galleria({
			autoplay: false,
			responsive: true,
			height: 0.65,
			imageCrop: 'landscape',
			transition: 'slide',
			thumbMargin: 10,
			showCounter: false,
			showInfo: false,
			thumbnails: "numbers"
		})

		
		$("#primary-menu a").on("click", function(e) {
			var that = $(this),
				link = that.parent().attr('id');

			if(link != undefined) {
				var target = $("#"+link);
				console.log(target.offset().top)
				if(target.length > 0) {
					e.preventDefault();
					var container = ($.browser.webkit) ? $('body') : $('html');  
					$("body,html,document").animate({scrollTop: target.offset().top},'slow');
					
				}
			}
		});
		
		$("a.play").on("click", function(e) {
			e.preventDefault();
			var that = $(this),
				li = that.closest('li'),
				ul = li.parent(),
				index = li.index(),
				slides = li.find('.galleria:first')
				active = ul.find('li.active');

			if(active.length > 0) {
				active.removeClass('active');
				var activeIndex = active.index();
				Galleria.get(activeIndex - 1).pause();	
				
				active.removeClass('active');
			}
				
			li.addClass('active');	
			Galleria.get(index - 1).play();
		});
		
		$("body").fadeIn(3000).css("display", "block");
	}
	
	
	//$(window).scroll(function() {

	//$(".galleria").css({
		//'background-positionY' : 80+(-($(this).scrollTop())/8)+"px",
	 //   'opacity' : 1-(($(this).scrollTop())/400)
	 //   });      


	//});
	
	init();
});