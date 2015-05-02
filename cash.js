var Cash = {};     // C Object simplifies exporting the module
Cash.coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];


Cash.getChange = function (totalPayable, cashPaid) {
    'use strict';

    var change = [], length = Cash.coins.length,
    remaining = cashPaid - totalPayable; // we reduce this below
    for (var i = 0; i < length; i++) { // loop through array of notes & coins:
        var coin = Cash.coins[i];

        if(remaining/coin >= 1) { // check coin fits into the remaining amount
            var times = Math.floor(remaining/coin); // no partial coins
            // console.log('Coin: '+coin+' fits in '+remaining +' x ' +times);

            for(var j = 0; j < times; j++) { // add coin to change array x times
                change.push(coin);
                remaining = remaining - coin; // reduce remaining amount by coin
            }
        }
    }
    // console.log(change); // print change array to console for feedback
    return change;
};

module.exports = Cash;         // export the module with a single method
