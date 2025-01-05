//? 116 ms of runtime, beats 7.78%
//? 49.71 mb of memory, beats 71.10%
//! I am not going for the best scores.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(j === i) continue;

            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};