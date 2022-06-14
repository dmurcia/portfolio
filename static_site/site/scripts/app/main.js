define(function(require) {

    var domReady = require('domReady'),
        navigation = require('./navigation'),
        techSkills = require('./technicalSkills');

    domReady(function() {
        navigation.init();
        techSkills.init();
    });

});
