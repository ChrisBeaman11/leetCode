var isPalindrome = function(x) {
    let counter = 1;
    let s = x.toString();
    for(let i = 0; i< s.length; i++){
        if(s[i] !== s[s.length-counter]) return false;
        counter++;
    }
    return true;
};
