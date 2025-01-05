/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let starting_number = init;
    for(let i = 0; i < nums.length; i++) {
        starting_number = fn(starting_number, nums[i]);
    }

    return starting_number;
};