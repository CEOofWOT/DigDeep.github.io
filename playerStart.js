const playerStartProgress = {
    tab: "main",
    depth: new ExpantaNum(0),
    ore: {
        oreTable: {
            height: new ExpantaNum(3),
            width: new ExpantaNum(3),
            widthLowestBound: new ExpantaNum(0),
            widthHighestBound: new ExpantaNum(3),

            area: new ExpantaNum(9),
            areaLowestBound: new ExpantaNum(0),
            areaHighestBound: new ExpantaNum(9),
        },
        you: {
            symbol: "You",
            currentPosition: new ExpantaNum(5),
            newPosition: new ExpantaNum(5),
        },
        noOre: {
            symbol: "NO",
        },
        dirt: {
            numberOf: new ExpantaNum(0),
            symbol: "Dr",
            sellPrice: new ExpantaNum(0.01),
        },
        stone: {
            numberOf: new ExpantaNum(0),
            symbol: "St",
            sellPrice: new ExpantaNum(0.05),
        },
        coal: {
            numberOf: new ExpantaNum(0),
            symbol: "Co",
            sellPrice: new ExpantaNum(0.20),
        },
        copper: {
            numberOf: new ExpantaNum(0),
            symbol: "Cp",
            sellPrice: new ExpantaNum(1.00),
        },
        iron: {
            numberOf: new ExpantaNum(0),
            symbol: "Ir",
            sellPrice: new ExpantaNum(2.50),
        },
        gold: {
            numberOf: new ExpantaNum(0),
            symbol: "Go",
            sellPrice: new ExpantaNum(5.00),
        },
        diamond: {
            numberOf: new ExpantaNum(0),
            symbol: "Di",
            sellPrice: new ExpantaNum(10.00),
        },
    },
    determination: {
        numberOf: new ExpantaNum(0),
        boost: {
            base: new ExpantaNum(0.5),
            current: new ExpantaNum(0),
        },
        cost: new ExpantaNum(10),
    },
    digPower: {
        base: new ExpantaNum(1),
        current: new ExpantaNum(1),
    },
    shovel: {
        type: new ExpantaNum(1),
        maxDepth: new ExpantaNum(250),
        cost: new ExpantaNum(0),
    },
    time: new ExpantaNum(1000),
    achievements: {
        ach00: {
            name: "Stay Determined",
            number: "00",
            haveAch: false,
        },
        ach01: {
            name: "Diggy Diggy Hole",
            number: "01",
            haveAch: false,
        },
    },
};
