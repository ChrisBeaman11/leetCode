var buildArray = function(nums) {
    let ret = [];
    for(let i = 0; i<nums.length; i++){
        ret.push(nums[nums[i]]);
    }
    return ret;
};

//try and optimize
