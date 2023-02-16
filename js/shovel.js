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
        var limit = ExpantaNum.times(this.shovelType,this.shovelMaxDepth);
        if (player.depth.gte(limit)) {
            player.digPower.current = player.digPower.current.times(0.5);
            player.determination.boost.current = player.determination.boost.current.times(0.5);
        };
    };
};

const playerLimit = new shovelCalc(player.shovel.type, player.shovel.maxDepth, player.shovel.cost);
