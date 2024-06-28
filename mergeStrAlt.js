var mergeAlternately = function(word1, word2) {
    let s = "";
    let counter = 0;
    let bigger = word1.length>word2.length? word1: word2;
    let smaller = word1.length<word2.length? word1: word2;
        for(let i = 0; i<smaller.length; i++){
            s+= word1[i];
            s+= word2[i];
            counter++;
        }
        for(let i = counter; i<bigger.length; i++){
            s+=bigger[i];
        }

    return s;
};
//merge string
