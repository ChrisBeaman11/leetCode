var singleNumber = function(nums) {
    let checked = [];
    while(checked.length<Math.round(nums.length/2)-1){
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[j] === nums[i]){
                checked.push(nums[i])
            }
        }
    }

        }
    for(let i = 0; i<nums.length; i++){
            if(!checked.includes(nums[i])){
                return nums[i];
            }
    }
    return;

};
//checked
