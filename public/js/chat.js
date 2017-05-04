$(document).ready(function(){
    var id = $('#receiverId').val();

    $('#message').click(function(){
      //value of the input filed which its id is msg
        var message = $.trim($('#msg').val());

        if(message != ''){
            $.post('/message/'+id, {
                message: message,
                id: id
            }, function(data){
                $('#msg').val('');
            });
        }
    });
//the div with class of msg will be refreshed after 200milisec
    setInterval(function(){
        $('.msg').load(location.href + ' .msg');
    }, 200);
});
