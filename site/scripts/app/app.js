define(function (require) {
	
	// Load modules with require call 
	var navigation = require('./navigation');

	$(document).ready(function() {
		var nav = $('.navbar');
		nav.on('click', 'li a', navigation.goTo()); 
	});
});