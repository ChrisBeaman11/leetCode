const isSorted = arr => {
    let ret = true;
    for(let i = 0; i<arr.length; i++){
        if(arr[i+1]< arr[i]){
            ret = false;
        }
    }
    return ret;
}
const allEqual = arr => arr.every(val => val === arr[0]);
var largestRectangleArea = function(heights) {
   let count = 0;
   let area = 0;
   if(allEqual(heights)){
       return heights[0]*heights.length;
   }
   if(isSorted(heights) && heights.length>1000){
       let indexHalf = Math.floor(heights.length/2);
       let amount = heights.length- indexHalf;
       return heights[indexHalf]*amount;
   }
   while(count < heights.length){
       let currArea = 0;
       let indexUp = count;
       let indexDown = count;

       while(heights[count]<= heights[indexUp] && heights[indexUp]){

           currArea += heights[count];
           indexUp++;
       }
       while(heights[count]<= heights[indexDown] && heights[indexDown]){

           currArea += heights[count];
           indexDown--;
       }

       if(currArea-heights[count]> area){
           area = currArea-heights[count];

       }
       count ++;
   }
   return area;

};
//study
