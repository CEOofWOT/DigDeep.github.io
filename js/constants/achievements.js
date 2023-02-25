var achNameChecking = "00";
var achNameCheckingNumber = 0;

$(document).ready(function(){
    $(".achievement").each(function(){
        $(`#ach${achNameChecking}`).html(player.achievements["ach" + achNameChecking].number);
        
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({
                html: true,
                placement: "bottom",
                title: "Description.",
                trigger: "hover",
                });
        });
        
        achNameCheckingNumber += 1;
        if (achNameCheckingNumber < 10) {
            achNameChecking = "0" + achNameCheckingNumber;
        } else {
            achNameChecking = "" + achNameCheckingNumber;
        };
    });
});
