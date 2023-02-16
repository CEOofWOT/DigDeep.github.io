var ore = player.ore;
var displayOre = ore;
var surroundingOre = "x"

var a = player.ore.dirt;
var b = player.ore.stone;
var c = player.ore.coal;
var d = player.ore.copper;
var e = player.ore.iron;
var f = player.ore.gold;
var g = player.ore.diamond;


function mineForOre(check) {
    if (check == "down") {
        if (player.depth.gte(1) && player.depth.lt(50)) {
            var x = Math.floor((Math.random() * 100) + 1);

            if (x >= 1 && x < 50) {
                a.numberOf = a.numberOf.plus(1);
            } else if (x >= 51 && x < 80) {
                b.numberOf = b.numberOf.plus(1);
            } else if (x >= 81 && x <= 100) {
                c.numberOf = c.numberOf.plus(1);
            };
        } if (player.depth.gte(51) && player.depth.lt(150)) {
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
        } if (player.depth.gte(151) && player.depth.lt(250)) {
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
        var oreCheck = $(`.surroundingOre${player.ore.you.newPosition}`).text();
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
    if (player.depth.gte(1) && player.depth.lt(50)) {
        $(`td`).each(function(){
            var x = Math.floor((Math.random() * 100) + 1);

            if (x >= 1 && x < 50) {
                surroundingOre = a.symbol;
            } else if (x >= 51 && x < 80) {
                surroundingOre = b.symbol;
            } else if (x >= 81 && x <= 100) {
                surroundingOre = c.symbol;
            };

            i++;
            if ($(`.surroundingOre${i}`).is("#you")) {
                mineForOre(check) 
            } else {
                $(`.surroundingOre${i}`).html(surroundingOre);
            };
        });
    } if (player.depth.gte(51) && player.depth.lt(150)) {
        $(`td`).each(function(){
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

            i++;
            if ($(`.surroundingOre${i}`).is("#you")) {
                mineForOre(check) 
            } else {
                $(`.surroundingOre${i}`).html(surroundingOre);
            };
        });
    } if (player.depth.gte(151) && player.depth.lt(250)) {
        $(`td`).each(function(){
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
            
            i++;
            if ($(`.surroundingOre${i}`).is("#you")) {
                mineForOre(check) 
            } else {
                $(`.surroundingOre${i}`).html(surroundingOre);
            };
        });
    };
};

setInterval(function(){
    $("#you").html(player.ore.you.symbol);
    $("#minedOre").html(player.ore.noOre.symbol);

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
}, 0);