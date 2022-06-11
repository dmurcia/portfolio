define(function() {

    var techSkillsSec = $('#tech-skills'),
        cont = 1;

    var initialize = function() {
        this.progressBar();
    }

    var progressBar = function() {
        var numProgress = techSkillsSec.find('.progress-radial').data('progress'),
            classProgress = techSkillsSec.find('.progress-radial');

        classProgress.each(function() {
            var $this = $(this);
            $({
                Counter: 0
            }).animate({
                Counter: numProgress
            }, {
                duration: 1000,
                easing: 'swing',
                step: function() {
                    $this.find('.overlay').text(Math.ceil(this.Counter) + '%');
                }
            });
        });
    }



    return {
        init: initialize,
        progressBar: progressBar
    }
});
