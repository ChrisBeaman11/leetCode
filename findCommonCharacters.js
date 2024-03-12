var largestWord = function(words){
    let biggestWord = words[0];
    for(let i =1; i<words.length; i++){
        if(biggestWord.length<words[i]){
            biggestWord = word[i];
        }
    }
    return biggestWord;
}
var commonChars = function(words, res = []) {
    let biggest =  largestWord(words);
    if(biggest === ""){
        return res;
    }
    let indexOfBig = words.find((wrd) => wrd===biggest);
    words.splice(indexOfBig, 1);
    let newArr;
    for(let i = 0; i<words.length; i++){
        if(biggest.includes(words[i][0])){
            res.push(words[i][0]);
        }
        if(words[i].length){
        words[i].splice(0, 1);
        }
        newArr.push(words[i]);
    }
    biggest.splice(0, 1);
    newArr.push(biggest);
    return (newArr, res);

};
