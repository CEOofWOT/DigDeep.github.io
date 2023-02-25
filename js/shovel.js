class shovelCalc {
    constructor(shovelType, shovelMaxDepth, shovelCost) {
        this.shovelType = shovelType;
        this.shovelMaxDepth = shovelMaxDepth;
        this.shovelCost = shovelCost;
    };

    get diggingLimit() {
        return this.diggingLimiter;
    };

    diggingLimiter() {
        var limit = ExpantaNum.times(this.shovelType, this.shovelMaxDepth);
        if (ExpantaNum.gte(player.start.depth.depth, limit)) {
            player.start.digPower.current = player.start.digPower.current.times(0.5);
            player.start.determination.boost.current = player.start.determination.boost.current.times(0.5);
        };
    };
};

const playerLimit = new shovelCalc(player.start.shovel.type, player.start.shovel.maxDepth, player.start.shovel.cost);
