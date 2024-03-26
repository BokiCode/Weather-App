$(document).ready(function () {
    $("#toggle-color-background").click(function () {
        $("#toggle-color-circle").toggleClass("move-right");
    });
    $(".search-field").click(function () {
        $("#input-city-field").focus();
    });
    $('.media-scroller').on('wheel', function(e) {
        this.scrollLeft += (e.originalEvent.deltaY < 0 ? -30 : 30);
    });
    $('#toggle-color-background').click(function() {
        let lightModeCss = $('link[href="/css/lightmode.css"]');
        if (lightModeCss.length === 0) {
            $('link[href="css/style.css"]').after('<link rel="stylesheet" href="/css/lightmode.css" id="light-mode-stylesheet">');
            $("#toggle-color-paragraph").text("Light Mode");
        } else {
            lightModeCss.remove();
            $("#toggle-color-paragraph").text("Dark Mode");
        }
    });
});
