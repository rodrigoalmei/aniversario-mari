var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this),
                str = $ele.html(),
                progress = 0;

            $ele.html('');

            var timer = setInterval(function () {
                var current = str.substr(progress, 1);

                if (current === '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }

                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));

                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

/* ===============================
   CONTADOR DESDE 04/09/2021
   =============================== */
var startDate = new Date(2021, 8, 4, 0, 0, 0); // setembro = 8

function timeElapse() {
    var current = new Date();

    var diff = current.getTime() - startDate.getTime();
    if (diff < 0) diff = 0;

    var seconds = Math.floor(diff / 1000);

    var days = Math.floor(seconds / 86400);
    seconds %= 86400;

    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    hours   = hours   < 10 ? "0" + hours   : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    $("#clock").html(
        "<span class='digit'>" + days + "</span> dias " +
        "<span class='digit'>" + hours + "</span> horas " +
        "<span class='digit'>" + minutes + "</span> minutos " +
        "<span class='digit'>" + seconds + "</span> segundos"
    );
}

/* ===============================
   INTERVALO FIXO
   =============================== */
setInterval(timeElapse, 1000);
