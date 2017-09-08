$(document).ready(function () {

    $(".item").click(function () {
        console.log($(this).find("ul"));
        $(this).find("ul").slideToggle();
    });
});