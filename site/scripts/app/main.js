define(function(require) {

    var domReady = require('domReady'),
        scrollSections = require('scrollSections'),
        navigation = require('./navigation');

    domReady(function() {
        // NAVIGATOM MODULE
        var nav = $('.navbar'),
            elTopSection = $('.section-top');

        nav.on('click', 'li a', $.proxy(navigation.goTo, this));
        elTopSection.scrollSections({
            // The class that should be applied to the current navigation item.
            active: 'active-scrollsection'
        });

    })

});
