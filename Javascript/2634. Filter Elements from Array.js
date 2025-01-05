/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filtered_array = [];

    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            filtered_array.push(arr[i]);
        }
    }

    return filtered_array;
};