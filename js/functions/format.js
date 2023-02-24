function format(number,displayNumber) {
    if (number == depth || number == dtrm.cost) {
        if (number.gte(1000000) && number.lt(1000000000)) {
            displayNumber = displayNumber.div(1000000);
            return (displayNumber.toPrecise(4) + "Mm");
        } if (number.gte(1000) && number.lt(1000000)) {
            displayNumber = displayNumber.div(1000);
            return (displayNumber.toPrecise(4) + "km");
        } else {
            return displayNumber + "m";
        };
    } else {
        if (number.gte(1000) && number.lt(1000000)) {
            displayNumber = displayNumber.div(1000);
            return (displayNumber.toPrecise(4) + "k");
        } if (number.gte(0) && number.lt(1000)) {
            return displayNumber;
        };
    };
};
 
