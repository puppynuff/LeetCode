/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let current_array_size = size;
    
    let temp_array = [];
    let output_array = [];

    for(let i = 0; i < arr.length; i++) {
        temp_array.push(arr[i]);
        current_array_size -=1;
        if(current_array_size == 0) {
            output_array.push(temp_array);
            current_array_size = size;
            temp_array = [];
        }
    }

    if(temp_array.length != 0) output_array.push(temp_array);

    return output_array;
};
