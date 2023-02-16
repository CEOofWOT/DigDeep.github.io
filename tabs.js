$(".tabButton").on("click",function(){
    $(".tab").hide();
    
    var target = $(this).attr("id");
    var name = "";
    for (let i = 0; i < target.length - 6; i++) {
        name += target[i];
    }
    
    $(`#${name}Tab`).show();
});