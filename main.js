$(function () {
    let timer = setTimeout(function () {
        $('button').attr("disabled", "disabled").removeClass('submit-anim');
        $('.alert-info').text('Game over').addClass('alert-danger').removeClass('alert-info');
    }, 10000);

    $('.btn-success').click(function () {
        if ($('#name').val() != '' && $('#email') != '') {
            $('.pac-man').hide();
            $('.alert').removeClass('alert-info').addClass('alert-success').text('Success');
            clearTimeout(timer);
        }
    });
});
