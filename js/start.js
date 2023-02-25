var depth = player.start.depth;
var displayDepth = depth;

var dtrm = player.start.determination;
var displayDtrm = dtrm;

var digPower = player.start.digPower;
var displayDigPower = digPower;

$(document).ready(function(){
    $("#dig").on("click",function(){
        if (ExpantaNum.neq(player.start.digPower.current, 0)) {
            playerLimit.diggingLimit();
            player.start.depth = player.start.depth.plus(player.start.digPower.current);
            spawnOre("down");
        };
    });

    /*
    $("#dig").on("keyup",function(keyPressed){
        switch (keyPressed.which) {
            case 32:
                player.start.depth = player.start.depth.plus(player.start.digPower);
                spawnOre("down");
                break;
        };
    });
    */

    $("#forwards").on("click",function(){
        var placesMoved = new ExpantaNum(-3);
        player.start.ore.you.newPosition = ExpantaNum.plus(player.start.ore.you.currentPosition,placesMoved);

        if (player.start.ore.you.newPosition.gt(player.start.ore.oreTable.areaLowestBound)) {
            $("#you").removeAttr("id");
            mineForOre("sides");
            $(`.surroundingOre${player.start.ore.you.currentPosition}`).html(player.start.ore.noOre.symbol);
            player.start.ore.you.currentPosition = player.start.ore.you.newPosition;

            $(`.surroundingOre${player.start.ore.you.newPosition}`).html(player.start.ore.you.symbol);
            $(`.surroundingOre${player.start.ore.you.newPosition}`).attr("id","you");
        };
    });

    $("#left").on("click",function(){
        var placesMoved = new ExpantaNum(-1);
        player.start.ore.you.newPosition = ExpantaNum.plus(player.start.ore.you.currentPosition,placesMoved);
        var modularNewPosition = ExpantaNum.mod(player.start.ore.you.newPosition,3);

        if (modularNewPosition.gt(player.start.ore.oreTable.widthLowestBound) && modularNewPosition.lte(player.start.ore.oreTable.widthHighestBound)) {
            $("#you").removeAttr("id");
            mineForOre("sides");
            $(`.surroundingOre${player.start.ore.you.currentPosition}`).html(player.start.ore.noOre.symbol);
            player.start.ore.you.currentPosition = player.start.ore.you.newPosition;

            $(`.surroundingOre${player.start.ore.you.newPosition}`).html(player.start.ore.you.symbol);
            $(`.surroundingOre${player.start.ore.you.newPosition}`).attr("id","you");
        };
    });

    $("#right").on("click",function(){
        var placesMoved = new ExpantaNum(1);
        player.start.ore.you.newPosition = ExpantaNum.plus(player.start.ore.you.currentPosition,placesMoved);
        var modularNewPosition = ExpantaNum.plus(ExpantaNum.mod(player.start.ore.you.newPosition,3),1);
        
        if (modularNewPosition.gte(player.start.ore.oreTable.widthLowestBound) && modularNewPosition.gte(player.start.ore.oreTable.widthHighestBound) || modularNewPosition.eq(1)) {
            $("#you").removeAttr("id");
            mineForOre("sides");
            $(`.surroundingOre${player.start.ore.you.currentPosition}`).html(player.start.ore.noOre.symbol);
            player.start.ore.you.currentPosition = player.start.ore.you.newPosition;

            $(`.surroundingOre${player.start.ore.you.newPosition}`).html(player.start.ore.you.symbol);
            $(`.surroundingOre${player.start.ore.you.newPosition}`).attr("id","you");
        }
    });

    $("#backwards").on("click",function(){
        var placesMoved = new ExpantaNum(3);
        player.start.ore.you.newPosition = ExpantaNum.plus(player.start.ore.you.currentPosition,placesMoved);
        
        if (player.start.ore.you.newPosition.lte(player.start.ore.oreTable.areaHighestBound)) {
            $("#you").removeAttr("id");
            mineForOre("sides");
            $(`.surroundingOre${player.start.ore.you.currentPosition}`).html(player.start.ore.noOre.symbol);
            player.start.ore.you.currentPosition = player.start.ore.you.newPosition;

            $(`.surroundingOre${player.start.ore.you.newPosition}`).html(player.start.ore.you.symbol);
            $(`.surroundingOre${player.start.ore.you.newPosition}`).attr("id","you");
        }
    });

    $("#determinationButton").on("click",function(){
        if (player.start.depth.gte(player.start.determination.cost)) {
            player.start.determination.numberOf = player.start.determination.numberOf.plus(1);
            player.start.determination.boost.current = player.start.determination.boost.current.plus(player.start.determination.boost.base);
            player.start.digPower.current = player.start.digPower.current.plus(player.start.determination.boost.current);
            if (ExpantaNum.gt(player.start.determination.numberOf, 1)) {
                player.start.digPower.current = player.start.digPower.current.sub(ExpantaNum.mul(ExpantaNum.sub(player.start.determination.numberOf,1),player.start.determination.boost.base))
            };
            player.start.determination.cost = ExpantaNum.mul(player.start.determination.cost,10)
        };
    });
});

setInterval(function(){
    displayDepth = player.start.depth;
    displayDigPower = player.start.digPower;
    displayDtrm = player.start.determination;
    
    $("#depth").html(format(depth,displayDepth));
    $("#digPower").html(format(digPower.current,displayDigPower.current));

    $("#determination").html(format(dtrm.numberOf,displayDtrm.numberOf));
    $("#determinationBoost").html(format(dtrm.boost.base,ExpantaNum.mul(displayDtrm.boost.base, 100)));
    $("#determinationCost").html(format(dtrm.cost,displayDtrm.cost));
    if (ExpantaNum.gte(player.start.depth, 10) || ExpantaNum.gte(player.start.determination.numberOf, 1)) {
        $("#determinationButton").show(500);
    } else {
        $("#determinationButton").hide();
    };
}, 0)
