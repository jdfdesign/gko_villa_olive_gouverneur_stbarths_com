G.make(1, {
	defaults: {
		transition: "pulse",
		transitionSpeed: 500,
		imageCrop: !0,
		thumbCrop: !0,
		carousel: !1,
		_locale: {
			show_thumbnails: "Show thumbnails",
			hide_thumbnails: "Hide thumbnails",
			play: "Play slideshow",
			pause: "Pause slideshow",
			enter_fullscreen: "Enter fullscreen",
			exit_fullscreen: "Exit fullscreen",
			popout_image: "Popout image",
			showing_image: "Showing image %s of %s"
		},
		_showFullscreen: !0,
		_showPopout: !0,
		_showProgress: !0,
		_showTooltip: !0
	},
	init: function(e) {
		Galleria.requires(1.28, "This version of Twelve theme requires Galleria version 1.2.8 or later");
		this.addElement("bar", "fullscreen", "play", "popout", "thumblink", "s1", "s2", "s3", "s4", "progress");
		this.append({
			stage: "progress",
			container: ["bar", "tooltip"],
			bar: ["fullscreen", "play", "popout", "thumblink", "info", "s1", "s2", "s3", "s4"]
		});
		this.prependChild("info", "counter");
		var l = this,
			E = this.$("thumbnails-container"),
			t = this.$("thumblink"),
			v = this.$("fullscreen"),
			q = this.$("play"),
			F = this.$("popout"),
			x = this.$("bar"),
			C = this.$("progress"),
			D = e.transition,
			z = e._locale,
			y = !1,
			O = !1,
			I = !! e.autoplay,
			M = !1,
			U = function() {
				E.height(l.getStageHeight()).width(l.getStageWidth()).css("top", y ? 0 : l.getStageHeight() + 30)
			},
			P = function() {
				y && M ? l.play() : (M = I, l.pause());
				Galleria.utils.animate(E, {
					top: y ? l.getStageHeight() + 30 : 0
				}, {
					easing: "galleria",
					duration: 400,
					complete: function() {
						l.defineTooltip("thumblink", y ? z.show_thumbnails : z.hide_thumbnails);
						t[y ? "removeClass" : "addClass"]("open");
						y = !y
					}
				})
			};
		U();
		e._showTooltip && l.bindTooltip({
			thumblink: z.show_thumbnails,
			fullscreen: z.enter_fullscreen,
			play: z.play,
			popout: z.popout_image,
			caption: function() {
				var d = l.getData(),
					e = "";
				d && (d.title && d.title.length && (e += "<strong>" + d.title + "</strong>"), d.description && d.description.length && (e += "<br>" + d.description));
				return e
			},
			counter: function() {
				return z.showing_image.replace(/\%s/, l.getIndex() + 1).replace(/\%s/, l.getDataLength())
			}
		});
		e.showInfo || this.$("info").hide();
		this.bind("play", function() {
			I = !0;
			q.addClass("playing")
		});
		this.bind("pause", function() {
			I = !1;
			q.removeClass("playing");
			C.width(0)
		});
		e._showProgress && this.bind("progress", function(d) {
			C.width(d.percent / 100 * this.getStageWidth())
		});
		this.bind("loadstart", function(d) {
			d.cached || this.$("loader").show()
		});
		this.bind("loadfinish", function() {
			C.width(0);
			this.$("loader").hide();
			this.refreshTooltip("counter", "caption")
		});
		this.bind("thumbnail", function(e) {
			d(e.thumbTarget).hover(function() {
				l.setInfo(e.thumbOrder);
				l.setCounter(e.thumbOrder)
			}, function() {
				l.setInfo();
				l.setCounter()
			}).click(function() {
				P()
			})
		});
		this.bind("fullscreen_enter", function() {
			O = !0;
			l.setOptions("transition", !1);
			v.addClass("open");
			x.css("bottom", 0);
			this.defineTooltip("fullscreen", z.exit_fullscreen);
			Galleria.TOUCH || this.addIdleState(x, {
				bottom: -31
			})
		});
		this.bind("fullscreen_exit", function() {
			O = !1;
			Galleria.utils.clearTimer("bar");
			l.setOptions("transition", D);
			v.removeClass("open");
			x.css("bottom", 0);
			this.defineTooltip("fullscreen", z.enter_fullscreen);
			Galleria.TOUCH || this.removeIdleState(x, {
				bottom: -31
			})
		});
		this.bind("rescale", U);
		Galleria.TOUCH || (this.addIdleState(this.get("image-nav-left"), {
			left: -36
		}), this.addIdleState(this.get("image-nav-right"), {
			right: -36
		}));
		t.click(P);
		e._showPopout ? F.click(function(d) {
			l.openLightbox();
			d.preventDefault()
		}) : (F.remove(), e._showFullscreen && (this.$("s4").remove(), this.$("info").css("right", 40), v.css("right", 0)));
		q.click(function() {
			l.defineTooltip("play", I ? z.play : z.pause);
			I ? l.pause() : (y && t.click(), l.play())
		});
		e._showFullscreen ? v.click(function() {
			O ? l.exitFullscreen() : l.enterFullscreen()
		}) : (v.remove(), e._show_popout && (this.$("s4").remove(), this.$("info").css("right", 40), F.css("right", 0)));
		!e._showFullscreen && !e._showPopout && (this.$("s3,s4").remove(), this.$("info").css("right", 10));
		e.autoplay && this.trigger("play")
	}
		});