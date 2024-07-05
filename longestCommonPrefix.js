var findShortestWord = function(strs){
    let shortest = strs[0];
    for(let i =0; i<strs.length; i++){
        if(strs[i].length<shortest.length){
            shortest = strs[i]
        }
    }
    return shortest;
}
var longestCommonPrefix = function(strs, counter = 0, length = strs.length) {
    let shortest = findShortestWord(strs);
    if(shortest === 0) return "";
    let wordLength = shortest.length;
        let newArr = strs.filter((str) => str[counter] === shortest[counter])
        if(newArr.length!==length){
            return shortest.substring(0, counter);
        }
    if(counter === wordLength) return shortest;
        counter++;
    return longestCommonPrefix(newArr, counter);
};


//stu
