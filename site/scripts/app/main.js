define(function (require) {
	
	// Load modules with require call 
	var navigation = require('./navigation');

	// DOM variables
	var nav = $('nav');

	nav.on('click', navigation.goTo());	
	

});