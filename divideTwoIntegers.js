var divide = function(dividend, divisor) {
    let res;
    if(dividend === 0) return  0;
    if(divisor === dividend) return 1;
    if(Math.abs(dividend) === divisor) return -1;
    if(Math.abs(divisor) === dividend) return-1;
    if(divisor === 1) res = dividend;
    if(divisor === -1 && dividend>0) res = 0-dividend;
    if(res<Math.pow(2, 31)) return res;
    if(res>Math.pow(-2, 31)) return res;
    let counter = 0;
    let sum = 0;
    if(dividend >0 && divisor>0){
    while(sum<=dividend){
        sum+= divisor;
        counter ++;
    }
    counter --;
    res = counter;
    }
    if(dividend<0 && divisor>0){
        while(Math.abs(dividend)>=sum){
            sum+= divisor;
            counter++;
        }
        counter --;
        res = 0-counter;
    }
    if(dividend>0 && divisor<0){
        while(dividend>=sum){
            sum+= Math.abs(divisor);
            counter++;
        }
        counter --;
        res = 0-counter;
    }
    if(dividend <0 && divisor<0){
    while(sum<=Math.abs(dividend)){
        sum+= Math.abs(divisor);
        counter ++;
    }
    counter --;
    res = counter;
    }
    if(res>=Math.pow(2, 31)) return Math.pow(2, 31)-1;
    if(res<Math.pow(-2, 31)) return Math.pow(-2, 31);
    return res;
};
// try and optimize this to the best time complexity
