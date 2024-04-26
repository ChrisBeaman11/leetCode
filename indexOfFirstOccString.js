var strStr = function(haystack, needle) {
    for(let i = 0; i< haystack.length; i++){
        if(haystack[i] === needle[0]){
            if(needle === haystack.substring(i, i+needle.length)){
                return i;
            }
        }
    }
    return -1;
};


