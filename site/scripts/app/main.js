define(function(require) {

    var domReady = require('domReady'),
        navigation = require('./navigation');

    domReady(function() {
        navigation.init();
    });

});
