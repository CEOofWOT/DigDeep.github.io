var ore = player.start.ore;
var displayOre = ore;
var surroundingOre = "x"

var a = player.start.ore.dirt;
var b = player.start.ore.stone;
var c = player.start.ore.coal;
var d = player.start.ore.copper;
var e = player.start.ore.iron;
var f = player.start.ore.gold;
var g = player.start.ore.diamond;


function mineForOre(check) {
    if (check == "down") {
        if (player.start.depth.depth.gte(1) && player.start.depth.depth.lt(50)) {
            var x = Math.floor((Math.random() * 100) + 1);

            if (x >= 1 && x < 50) {
                a.numberOf = a.numberOf.plus(1);
            } else if (x >= 51 && x < 80) {
                b.numberOf = b.numberOf.plus(1);
            } else if (x >= 81 && x <= 100) {
                c.numberOf = c.numberOf.plus(1);
            };
        } if (player.start.depth.depth.gte(51) && player.start.depth.depth.lt(150)) {
            var x = Math.floor((Math.random() * 100) + 1);

            if (x >= 1 && x < 40) {
                a.numberOf = a.numberOf.plus(1);
            } else if (x >= 41 && x < 70) {
                b.numberOf = b.numberOf.plus(1);
            } else if (x >= 71 && x < 80) {
                c.numberOf = c.numberOf.plus(1);
            } else if (x >= 81 && x < 90) {
                d.numberOf = d.numberOf.plus(1);
            } else if (x >= 91 && x < 98) {
                e.numberOf = e.numberOf.plus(1);
            } else if (x >= 99 && x <= 100) {
                f.numberOf = f.numberOf.plus(1);
            };
        } if (player.start.depth.depth.gte(151) && player.start.depth.depth.lt(250)) {
            var x = Math.floor((Math.random() * 100) + 1);

            if (x >= 1 && x < 35) {
                a.numberOf = a.numberOf.plus(1);
            } else if (x >= 36 && x < 60) {
                b.numberOf = b.numberOf.plus(1);
            } else if (x >= 61 && x < 80) {
                c.numberOf = c.numberOf.plus(1);
            } else if (x >= 81 && x < 90) {
                d.numberOf = d.numberOf.plus(1);
            } else if (x >= 91 && x < 95) {
                e.numberOf = e.numberOf.plus(1);
            } else if (x >= 96 && x < 100) {
                f.numberOf = f.numberOf.plus(1);
            } else if (x == 100) {
                g.numberOf = g.numberOf.plus(1);
            };
        };
    } if (check == "sides") {
        var oreCheck = $(`.surroundingOre${player.start.ore.you.newPosition}`).text();
        if (oreCheck == a.symbol) {
            a.numberOf = a.numberOf.plus(1);
        } else if (oreCheck == b.symbol) {
            b.numberOf = b.numberOf.plus(1);
        } else if (oreCheck == c.symbol) {
            c.numberOf = c.numberOf.plus(1);
        } else if (oreCheck == d.symbol) {
            d.numberOf = d.numberOf.plus(1);
        } else if (oreCheck == e.symbol) {
            e.numberOf = e.numberOf.plus(1);
        } else if (oreCheck == f.symbol) {
            f.numberOf = f.numberOf.plus(1);
        } else if (oreCheck == g.symbol) {
            g.numberOf = g.numberOf.plus(1);
        };
    };
};

function spawnOre(check) {
    let i = 0;
    $(`#oreTable td`).each(function(){
        if (player.start.depth.depth.gte(1) && player.start.depth.depth.lt(50)) {
            var x = Math.floor((Math.random() * 100) + 1);

            if (x >= 1 && x < 50) {
                surroundingOre = a.symbol;
            } else if (x >= 51 && x < 80) {
                surroundingOre = b.symbol;
            } else if (x >= 81 && x <= 100) {
                surroundingOre = c.symbol;
            };
        } else if (player.start.depth.depth.gte(51) && player.start.depth.depth.lt(150)) {
            var x = Math.floor((Math.random() * 100) + 1);

            if (x >= 1 && x < 40) {
                surroundingOre = a.symbol;
            } else if (x >= 41 && x < 70) {
                surroundingOre = b.symbol;
            } else if (x >= 71 && x < 80) {
                surroundingOre = c.symbol;
            } else if (x >= 81 && x < 90) {
                surroundingOre = d.symbol;
            } else if (x >= 91 && x < 98) {
                surroundingOre = e.symbol;
            } else if (x >= 99 && x <= 100) {
                surroundingOre = f.symbol;
            };
        } else if (player.start.depth.depth.gte(151) && player.start.depth.depth.lt(250)) {
            var x = Math.floor((Math.random() * 100) + 1);

            if (x >= 1 && x < 35) {
                surroundingOre = a.symbol;
            } else if (x >= 36 && x < 60) {
                surroundingOre = b.symbol;
            } else if (x >= 61 && x < 80) {
                surroundingOre = c.symbol;
            } else if (x >= 81 && x < 90) {
                surroundingOre = d.symbol;
            } else if (x >= 91 && x < 95) {
                surroundingOre = e.symbol;
            } else if (x >= 96 && x < 100) {
                surroundingOre = f.symbol;
            } else if (x == 100) {
                surroundingOre = g.symbol;
            };
        };
        
        i++;
        
        if ($(`surroundingOre${i}`).is("#you")) {
            console.log(check, i)
            mineForOre(check);
        } else {
            console.log(check, i)
            $(`surroundingOre${i}`).html(surroundingOre);
        };
    });
    
    // console.log(player.start.ore.layer);
};

setInterval(function(){
    $("#you").html(player.start.ore.you.symbol);
    $("#minedOre").html(player.start.ore.noOre.symbol);

    $("#dirt").html(format(a.numberOf,displayOre.dirt.numberOf));
    if (a.numberOf.gte(1)) {
        $(".aOreOwned").show(500);
    } else {
        $(".aOreOwned").hide();
    };

    $("#stone").html(format(b.numberOf,displayOre.stone.numberOf));
    if (b.numberOf.gte(1)) {
        $(".bOreOwned").show(500);
    } else {
        $(".bOreOwned").hide();
    };

    $("#coal").html(format(c.numberOf,displayOre.coal.numberOf));
    if (c.numberOf.gte(1)) {
        $(".cOreOwned").show(500);
    } else {
        $(".cOreOwned").hide();
    };

    $("#copper").html(format(c.numberOf,displayOre.copper.numberOf));
    if (d.numberOf.gte(1)) {
        $(".dOreOwned").show(500);
    } else {
        $(".dOreOwned").hide();
    };

    $("#iron").html(format(d.numberOf,displayOre.iron.numberOf));
    if (e.numberOf.gte(1)) {
        $(".eOreOwned").show(500);
    } else {
        $(".eOreOwned").hide();
    };

    $("#gold").html(format(e.numberOf,displayOre.gold.numberOf));
    if (f.numberOf.gte(1)) {
        $(".fOreOwned").show(500);
    } else {
        $(".fOreOwned").hide();
    };

    $("#diamond").html(format(f.numberOf,displayOre.diamond.numberOf));
    if (g.numberOf.gte(1)) {
        $(".gOreOwned").show(500);
    } else {
        $(".gOreOwned").hide();
    }
    
    player.start.ore.layer = $(`#oreTable td`).toArray;
}, 0);
