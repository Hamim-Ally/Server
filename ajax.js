$(document).ready(function () {

    $("#form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $('.modal-body').removeClass("n-active-popup");
            $('.modal-body').addClass("active-popup");
            $("#form").trigger("reset");
        });
        return false;
    });

});
