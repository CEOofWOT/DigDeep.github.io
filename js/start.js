var depth = player.depth;
var displayDepth = depth;

var dtrm = player.determination;
var displayDtrm = dtrm;

var digPower = player.digPower;
var displayDigPower = digPower;

$(document).ready(function(){
    $("#dig").on("click",function(){
        var randomVariable = Number(player.digPower.current.toPrecise(5))
        if (ExpantaNum.neq(randomVariable, 0)) {
            playerLimit.diggingLimit();
            player.depth = player.depth.plus(player.digPower.current);
            spawnOre("down");
        };
    });

    /*
    $("#dig").on("keyup",function(keyPressed){
        switch (keyPressed.which) {
            case 32:
                player.depth = player.depth.plus(player.digPower);
                spawnOre("down");
                break;
        };
    });
    */

    $("#forwards").on("click",function(){
        var placesMoved = new ExpantaNum(-3);
        player.ore.you.newPosition = ExpantaNum.plus(player.ore.you.currentPosition,placesMoved);

        if (player.ore.you.newPosition.gt(player.ore.oreTable.areaLowestBound)) {
            $("#you").removeAttr("id");
            mineForOre("sides");
            $(`.surroundingOre${player.ore.you.currentPosition}`).html(player.ore.noOre.symbol);
            player.ore.you.currentPosition = player.ore.you.newPosition;

            $(`.surroundingOre${player.ore.you.newPosition}`).html(player.ore.you.symbol);
            $(`.surroundingOre${player.ore.you.newPosition}`).attr("id","you");
        }
    });

    $("#left").on("click",function(){
        var placesMoved = new ExpantaNum(-1);
        player.ore.you.newPosition = ExpantaNum.plus(player.ore.you.currentPosition,placesMoved);
        var modularNewPosition = ExpantaNum.mod(player.ore.you.newPosition,3);

        if (modularNewPosition.gt(player.ore.oreTable.widthLowestBound) && modularNewPosition.lte(player.ore.oreTable.widthHighestBound)) {
            $("#you").removeAttr("id");
            mineForOre("sides");
            $(`.surroundingOre${player.ore.you.currentPosition}`).html(player.ore.noOre.symbol);
            player.ore.you.currentPosition = player.ore.you.newPosition;

            $(`.surroundingOre${player.ore.you.newPosition}`).html(player.ore.you.symbol);
            $(`.surroundingOre${player.ore.you.newPosition}`).attr("id","you");
        }
    });

    $("#right").on("click",function(){
        var placesMoved = new ExpantaNum(1);
        player.ore.you.newPosition = ExpantaNum.plus(player.ore.you.currentPosition,placesMoved);
        var modularNewPosition = ExpantaNum.plus(ExpantaNum.mod(player.ore.you.newPosition,3),1);
        
        if (modularNewPosition.gte(player.ore.oreTable.widthLowestBound) && modularNewPosition.gte(player.ore.oreTable.widthHighestBound) || modularNewPosition.eq(1)) {
            $("#you").removeAttr("id");
            mineForOre("sides");
            $(`.surroundingOre${player.ore.you.currentPosition}`).html(player.ore.noOre.symbol);
            player.ore.you.currentPosition = player.ore.you.newPosition;

            $(`.surroundingOre${player.ore.you.newPosition}`).html(player.ore.you.symbol);
            $(`.surroundingOre${player.ore.you.newPosition}`).attr("id","you");
        }
    });

    $("#backwards").on("click",function(){
        var placesMoved = new ExpantaNum(3);
        player.ore.you.newPosition = ExpantaNum.plus(player.ore.you.currentPosition,placesMoved);
        
        if (player.ore.you.newPosition.lte(player.ore.oreTable.areaHighestBound)) {
            $("#you").removeAttr("id");
            mineForOre("sides");
            $(`.surroundingOre${player.ore.you.currentPosition}`).html(player.ore.noOre.symbol);
            player.ore.you.currentPosition = player.ore.you.newPosition;

            $(`.surroundingOre${player.ore.you.newPosition}`).html(player.ore.you.symbol);
            $(`.surroundingOre${player.ore.you.newPosition}`).attr("id","you");
        }
    });

    $("#determinationButton").on("click",function(){
        if (player.depth.gte(player.determination.cost)) {
            player.determination.numberOf = player.determination.numberOf.plus(1);
            player.determination.boost.current = player.determination.boost.current.plus(player.determination.boost.base);
            player.digPower.current = player.digPower.current.plus(player.determination.boost.current);
            if (player.determination.numberOf.gt(1)) {
                player.digPower.current = player.digPower.current.sub(ExpantaNum.mul(ExpantaNum.sub(player.determination.numberOf,1),player.determination.boost.base))
            };
            player.determination.cost = ExpantaNum.mul(player.determination.cost,10)
        };
    });
});

setInterval(function(){
    displayDepth = player.depth;
    displayDigPower = player.digPower;
    displayDtrm = player.determination;
    
    $("#depth").html(format(depth,displayDepth));
    $("#digPower").html(format(digPower.current,displayDigPower.current));

    $("#determination").html(format(dtrm.numberOf,displayDtrm.numberOf));
    $("#determinationBoost").html(format(dtrm.boost.base,displayDtrm.boost.base.mul(100)));
    $("#determinationCost").html(format(dtrm.cost,displayDtrm.cost));
    if (player.depth.gte(10) || player.determination.numberOf.gte(1)) {
        $("#determinationButton").show(500);
    } else {
        $("#determinationButton").hide();
    };
}, 0)
