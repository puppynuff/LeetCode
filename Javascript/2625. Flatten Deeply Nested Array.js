/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n == 0) return arr;

    let primary_array = [];

    let reduced_size = false;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length === undefined) {
            primary_array.push(arr[i]);
            continue;
        }
        for(let j = 0; j < arr[i].length; j++) {
            reduced_size = true;
            primary_array.push(arr[i][j]);
        } 
    }

    if(!reduced_size) return primary_array;

    return flat(primary_array, n-1);

};