define(function() {

    var initialize = function() {
        // NAVIGATOM MODULE
        var nav = $('.navbar');

        nav.on('click', 'li a', $.proxy(this.goTo, this));

        // ACTIVE ANIMATIONS
        this.scrollSection();
        $(window).scroll(this.scrollSection);
    }

    var scrollSection = function() {
    	var windscroll = $(window).scrollTop(),
            elTopSection = $('.section-top');

    	elTopSection.each(function(index) {
        	 if ($(this).position().top <= windscroll) {
                $(this).addClass('active-section');
            }
        });
    }

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
        init: initialize,
        goTo: goTo,
        scrollSection: scrollSection
    }
});
