$(function(){
    var $email = $('#email');
    var $message = $('#message');

    $('#schedule').on('click', function(){
        var client = {
            email: $email.val(),
            message: $message.val()
        };

        $.ajax({
            type:'POST',
            url:'./app/routes.js',
            data: client,
            success: function(){
                console.log("I got it");
            }
            error: function(){
                alert("fucked up");
            }
        });
    });
});