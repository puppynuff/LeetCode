/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(Array.isArray(obj)) {
        return check_array(obj);
    }

    return check_object(obj);
};


function check_object(obj) {
    let temp_object = {};

    if(obj === null) return;

    for(const [key, value] of Object.entries(obj)) {
        if(Array.isArray(value)) {
            temp_object[key] = check_array(value);
            console.log("object!");
            continue;
        }

        if(Object.prototype.toString.call(value) == "[object Object]") {
            temp_object[key] = check_object(value);
            continue;
        }

        if(Boolean(value) == false) continue;
        temp_object[key] = value;
    }
    

    return temp_object;
}

function check_array(arr) {
    let temp_array = [];

    for(let i = 0; i < arr.length; i++){ 
        if(Array.isArray(arr[i])) {
            temp_array.push(check_array(arr[i]));
            continue;
        }

        if(Object.prototype.toString.call(arr[i]) == "[object Object]") {
            if(arr[i] === null) continue;
            temp_array.push(check_object(arr[i]));
            continue;
        }

        if(Boolean(arr[i]) == false) continue;
         temp_array.push(arr[i]);
    }

    return temp_array;
}