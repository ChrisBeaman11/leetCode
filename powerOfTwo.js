var isPowerOfTwo = function(n) {
    if(n===1) return true;
    if(n<2) return false;
    if(n===2)return true;
    return isPowerOfTwo(n/2);
};
//test
