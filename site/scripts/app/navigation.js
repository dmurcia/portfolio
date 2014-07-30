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

	return {
		goTo: goTo
	}
});