/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let temp_map = new Map();
    let output_array = [];

    for(let i = 0; i < arr1.length; i++) {
        temp_map[arr1[i].id] = arr1[i];
    }

    for(let i = 0; i < arr2.length; i++) {
        if(temp_map[arr2[i].id] == undefined) { 
            temp_map[arr2[i].id] = arr2[i];
            continue;
        }
        for(const [key, value] of Object.entries(arr2[i])) {
            if(key == "id") continue;
            console.log(temp_map[arr2[i].id])
            temp_map[arr2[i].id][key] =  value;
        }
    }

    for(const [key, value] of Object.entries(temp_map)) {
        output_array.push(value);
    }

    return output_array.sort((a, b) => a.id - b.id)
};