$(document).ready(function () {
    $("#toggle-color-background").click(function () {
        $("#toggle-color-circle").toggleClass("move-right");
    });
    $(".search-field").click(function () {
        $("#input-city-field").focus();
    });
    $('.media-scroller').on('wheel', function(e) {
        let delta = e.originalEvent.deltaY;
        this.scrollLeft += (delta < 0 ? -30 : 30);
    });
});
