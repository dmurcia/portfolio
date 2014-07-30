define(function (require) {

	var domReady = require('domReady'),
		navigation = require('./navigation');

	domReady(function(){
		// NAVIGATOM MODULE
		var nav = $('.navbar');

		nav.on('click', 'li a', $.proxy(navigation.goTo, this));

	})

});