var maxProfit = function(prices) {
    let max = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            if((prices[i] - minPrice)>max)
            max =  prices[i] - minPrice;
        }
    }

    return max;
    //a
};
