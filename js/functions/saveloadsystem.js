$(document).ready(function(){
    $("#save").on("click",function(){
        var saveState = JSON.stringify(player);
        localStorage.setItem("DigDeepSaveFile", saveState);
        console.log(`Save State: ${saveState}`)
    });
    
    $("#save").on("click",function(){
        var loadState = localStorage.getItem("DigDeepSaveFile");
        player = JSON.parse(loadState)
        console.log(`Load State: ${loadState}`)
        console.log(`Player: ${player}`)
    });
});
