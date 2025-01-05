/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // It says sorted but the way I am doing it if num1 is smaller than num2 it will sort wrong.
    let combined_array = nums1.concat(nums2).sort((a, b) => a - b);

    let index = combined_array.length / 2;

    if(index.toString().endsWith(".5")) {
        console.log(index);
        console.log(combined_array);
        return combined_array[Math.floor(index)];
    }

    console.log(index);
    return (combined_array[index] + combined_array[index - 1]) / 2;
};