var majorityElement = function(nums) {
    let numCounter = {};
    for(let i = 0; i<nums.length; i++){
        if(numCounter[nums[i]]){
        numCounter[nums[i]] ++;
        }
        else{
            numCounter[nums[i]] = 1;
        }
        if(numCounter[nums[i]]>nums.length/2){
            return nums[i];
        }
    }
};
//check
