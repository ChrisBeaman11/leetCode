var rotate = function(nums, k) {
    newArr = [];
    if(k>0){
        while(k>nums.length){
            k -= nums.length;
        }
        newArr = nums.splice(0, nums.length-k)
        let length = newArr.length;
        for(let i = 0; i<newArr.length; i++){
            nums.push(newArr.slice(i, i+1));
        }
    }
    return nums;


};
//checked
