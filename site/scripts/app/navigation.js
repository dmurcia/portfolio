define(function(){

	var goTo = function(e) {
		var cTarget = $(e.currentTarget),
			htmlbody = $('html, body'),
			targetName = cTarget.data('ref'),
			targetId = $('#' + targetName);

		e.preventDefault();

		htmlbody.animate({
			scrollTop: targetId.offset().top
		}, 1000);
	}

	var topSection = function(e) {
		var	winTop = $(window).scrollTop()
			elTopSection = $('.section-top').offset().top;


		if (winTop == elTopSection) {
			console.log('si');	
		}
		
	}

	return {
		goTo: goTo,
		top: topSection
	}
});