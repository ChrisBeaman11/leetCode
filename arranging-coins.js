var arrangeCoins = function(n) {
    let adder = 1;
    let sum = 0;
    while(sum<n){
        sum += adder;
        adder++;
    }
    adder--;
    if(sum>n){
        return --adder;
    }
    if(sum===n){
        return adder;
    }
};
