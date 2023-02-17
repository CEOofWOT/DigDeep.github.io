var achNameChecking = "00";
var achNameCheckingNumber = 0;

$(document).ready(function(){
    $(".achievement").each(function(){
        $(`#ach${achNameChecking}`).html(player.achievements["ach" + achNameChecking].number);
        
        $(function () {
			$('.achievement').tooltip({
				html: true,
				placement: "bottom",
				title: "Description.",
				trigger: "hover",
				position: "relative",
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
