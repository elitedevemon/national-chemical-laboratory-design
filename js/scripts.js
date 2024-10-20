(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		jQuery('.toggle').click(function(){
			jQuery(this).toggleClass('activate')
		})
		
		$(".hero-slider").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			nav: false,
			dots: false,
		});
				
		$(".competencies-slider").owlCarousel({
			items: 4,
			loop: true,
			autoplay: true,
			autoplayTimeout: 7000,
			nav: false,
			dots: false,
			responsive: {
				0 : {
					items: 2
				},
				557 :{
					items: 3
				},
				768: {
					items:4
				}
			}
		});

		$('.prev-btn').on('click', function() {
            $('.competencies-slider').owlCarousel('prev');
        });
        $('.next-btn').on('click', function() {
            $('.competencies-slider').owlCarousel('next');
        });
		
		
		
		
		
		
	});
})(jQuery);

function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
  }

  function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
  }