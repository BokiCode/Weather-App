$(document).ready(function () {
    $("#toggle-color-background").click(function () {
        $("#toggle-color-circle").toggleClass("move-right");
    });
    $(".search-field").click(function() {
        $("#input-city-field").focus();
    });
});
