var romanToInt = function(s) {
    let decoder = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let sum = 0;
    for(let i = 0; i< s.length; i++){
        if(s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X' || s[i+1] === 'L' || s[i+1] === 'C' || s[i+1] === 'D' || s[i+1] === 'M')) sum-=2;
        if(s[i] === 'V' && (s[i+1] === 'X' || s[i+1] === 'L' || s[i+1] === 'C' || s[i+1] === 'D' || s[i+1] === 'M')) sum-=10;
        if(s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C' || s[i+1] === 'M' || s[i+1] === 'D')) sum-=20;
        if(s[i] === 'L' && (s[i+1] === 'C' || s[i+1] === 'M' || s[i+1] === 'D')) sum-=100;
        if(s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M')) sum-=200;
        if(s[i] === 'D' && s[i+1] === 'M') sum-=1000;
        sum+= decoder[s[i]];
    }
    return sum;
};
//check
