var achNameChecking = "00";
var achNameCheckingNumber = 0;

$(document).ready(function(){
    $(`.achievement`).each(function(){
        $(`#ach${achNameChecking}`).html(player.achievements["ach" + achNameChecking].number);
        
        /*
        $(".achievement").notify(
            "I'm to the right of this box", 
            { position:"bottom center" }
          );
        */

        achNameCheckingNumber += 1;
        if (achNameCheckingNumber < 10) {
            achNameChecking = "0" + achNameCheckingNumber;
        } else {
            achNameChecking = "" + achNameCheckingNumber
        };
    });
});
