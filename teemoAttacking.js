var lesserVal = function(num, duration){
    if(num<duration){
        return num;
    }
    else{
        return duration;
    }
}
var findPoisonedDuration = function(timeSeries, duration) {

    let total = 0;
    for(let i = 0; i<timeSeries.length; i++){
    total+= lesserVal((timeSeries[i+1] - timeSeries[i]), duration)

    }
    return total;

};
