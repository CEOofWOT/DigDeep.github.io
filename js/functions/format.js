function format(number,displayNumber) {
    if (number == depth || number == dtrm.cost) {
        if (number.gte(1000000) && number.lt(1000000000)) {
            displayNumber = displayNumber.div(1000000);
            return (ExpantaNum.toStringWithDecimalPlaces(4, displayNumber) + "Mm");
        } if (number.gte(1000) && number.lt(1000000)) {
            displayNumber = displayNumber.div(1000);
            return (ExpantaNum.toStringWithDecimalPlaces(4, displayNumber) + "km");
        } else {
            return (ExpantaNum.toStringWithDecimalPlaces(4, displayNumber) + "m");
        };
    } else {
        if (number.gte(1000) && number.lt(1000000)) {
            displayNumber = displayNumber.div(1000);
            return (ExpantaNum.toStringWithDecimalPlaces(4, displayNumber) + "k");
        } if (number.gte(0) && number.lt(1000)) {
            return (ExpantaNum.toStringWithDecimalPlaces(4, displayNumber));
        };
    };
};
