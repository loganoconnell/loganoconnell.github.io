/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

particlesJS('particles-js', {
	particles: {
		  number: {
			  value: 80,
			  density: {
				  enable: !0,
				  value_area: 800
			  }
		  },
		  color: {
			  value: "#ffffff"
		  },
		  shape: {
			  type: "polygon",
			  stroke: {
				  width: 0,
				  color: "#000000"
			  },
			  polygon: {
				  nb_sides: 5
			  },
			  image: {
				  src: "img/github.svg",
				  width: 100,
				  height: 100
			  }
		  },
		  opacity: {
			  value: .25,
			  random: !1,
			  anim: {
				  enable: !1,
				  speed: 1,
				  opacity_min: .1,
				  sync: !1
			  }
		  },
		  size: {
			  value: 3,
			  random: !0,
			  anim: {
				  enable: !1,
				  speed: 19.18081918081918,
				  size_min: .1,
				  sync: !1
			  }
		  },
		  line_linked: {
			  enable: !0,
			  distance: 150,
			  color: "#ffffff",
			  opacity: .4,
			  width: 1
		  },
		  move: {
			  enable: !0,
			  speed: 4,
			  direction: "none",
			  random: !0,
			  straight: !1,
			  out_mode: "out",
			  bounce: !1,
			  attract: {
				  enable: !1,
				  rotateX: 600,
				  rotateY: 1200
			  }
		  },
		  nb: 80
	  },
	  interactivity: {
		  detect_on: "canvas",
		  events: {
			  onhover: {
				  enable: !1,
				  mode: "grab"
			  },
			  onclick: {
				  enable: !0,
				  mode: "push"
			  },
			  resize: !0
		  },
		  modes: {
			  grab: {
				  distance: 400,
				  line_linked: {
					  opacity: 1
				  }
			  },
			  bubble: {
				  distance: 400,
				  size: 40,
				  duration: 2,
				  opacity: 8,
				  speed: 3
			  },
			  repulse: {
				  distance: 200,
				  duration: .4
			  },
			  push: {
				  particles_nb: 4
			  },
			  remove: {
				  particles_nb: 2
			  }
		  }
	  },
	  retina_detect: !0
  }
);

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});

	// Polyfill: Object fit.
		if (!browser.canUse('object-fit')) {

			$('.image[data-position]').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', $this.data('position'))
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

			$('.gallery > a').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', 'center')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

		}

	// Gallery.
		$('.gallery')
			.on('click', 'a', function(event) {

				var $a = $(this),
					$gallery = $a.parents('.gallery'),
					$modal = $gallery.children('.modal'),
					$modalImg = $modal.find('img'),
					href = $a.attr('href');

				// Not an image? Bail.
					if (!href.match(/\.(jpg|gif|png|mp4)$/))
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Lock.
					$modal[0]._locked = true;

				// Set src.
					$modalImg.attr('src', href);

				// Set visible.
					$modal.addClass('visible');

				// Focus.
					$modal.focus();

				// Delay.
					setTimeout(function() {

						// Unlock.
							$modal[0]._locked = false;

					}, 600);

			})
			.on('click', '.modal', function(event) {

				var $modal = $(this),
					$modalImg = $modal.find('img');

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Already hidden? Bail.
					if (!$modal.hasClass('visible'))
						return;

				// Stop propagation.
					event.stopPropagation();

				// Lock.
					$modal[0]._locked = true;

				// Clear visible, loaded.
					$modal
						.removeClass('loaded')

				// Delay.
					setTimeout(function() {

						$modal
							.removeClass('visible')

						setTimeout(function() {

							// Clear src.
								$modalImg.attr('src', '');

							// Unlock.
								$modal[0]._locked = false;

							// Focus.
								$body.focus();

						}, 475);

					}, 125);

			})
			.on('keypress', '.modal', function(event) {

				var $modal = $(this);

				// Escape? Hide modal.
					if (event.keyCode == 27)
						$modal.trigger('click');

			})
			.on('mouseup mousedown mousemove', '.modal', function(event) {

				// Stop propagation.
					event.stopPropagation();

			})
			.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
				.find('img')
					.on('load', function(event) {

						var $modalImg = $(this),
							$modal = $modalImg.parents('.modal');

						setTimeout(function() {

							// No longer visible? Bail.
								if (!$modal.hasClass('visible'))
									return;

							// Set loaded.
								$modal.addClass('loaded');

						}, 275);

					});

})(jQuery);
