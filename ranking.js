var findRelativeRanks = function(score) {
    let rankObj = {};
    let sortedArr = score.toSorted();
    rankObj["Gold Medal"] = sortedArr[sortedArr.length-1]
    rankObj["Silver Medal"] = sortedArr[sortedArr.length-2]
    rankObj["Bronze Medal"] = sortedArr[sortedArr.length-3]
    for(let i = sortedArr.length -4; i>=0; i--){
        rankObj[(sortedArr.length-i).toString()] = sortedArr[i];
    }
    let valArr = Object.values(rankObj);
    let keysArr = Object.keys(rankObj);
    console.log(valArr);
    console.log(keysArr);
    let res = [];
    for(let i =0; i<score.length; i++){
        let index = valArr.find((ele) => ele === score[i]);
        res.push(keysArr[index]);
    }
    return res;
};
