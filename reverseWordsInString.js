var removeMultipleSpaces = (s) =>{
    while(s[s.length-1] === ' '){
        s = s.slice(0, s.length-1);
    }
    for(let i =0; i<s.length; i++){
        if(s[i] === ' ' && s[i+1] === ' '){
            s = s.slice(0, i+1).concat(s.slice(i+2));
            i--;
        }
    }
    return s;
}
var reverseWords = function(s) {
    if(!s.includes(' ')) return s;
    s = removeMultipleSpaces(s);
    s = s.split(' ').reverse().join(' ');
    while(s[s.length-1] === ' '){
        s = s.slice(0, s.length-1);
    }
    return s;
};
//reverse
