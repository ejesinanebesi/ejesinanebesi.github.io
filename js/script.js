$(document).ready(function () {
    console.log("document ready");

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus');
    });

    $('.header-offer__btn, .close').click(function () {
        $('.overlay').toggle();
    });

    $('.modal__image').click(function () {
       var imgSrc = $(this).attr('src');
       $('.modal__image-main').attr('src', imgSrc);
    });

});