var climbStairs = function(n) {
    let counter = 2;
    let res = 2;
    let next = 2;
    let prev = 1;
    if(n===1) return prev;
    if(n===2) return next;
    while (counter!=n){
        res+= prev;
        prev= next;
        next = res;
        counter ++;
    }
    return res;
};

