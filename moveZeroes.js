let arrFilter = (nums) =>{
    let arr = nums.filter((el) => el!==0);
    return arr;
}
var moveZeroes = function(nums) {
    let numbers = nums.length;
    let newArr = arrFilter(nums);
    let length = nums.length;
    let amountOfZeros = nums.length - newArr.length;
    for(let i = 0; i< amountOfZeros; i++){
        newArr.push(0);
    }
    for(let i = 0; i<nums.length; i ++){
        nums[i] = newArr[i]
    }

};
