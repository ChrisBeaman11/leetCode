var hammingWeight = function(n) {
    let nString = n.toString(2);
    let count = 0;
    for(let i = 0; i<nString.length; i++){
        if(nString[i] === "1"){
            count++;

        }
    }
    return count;
};
