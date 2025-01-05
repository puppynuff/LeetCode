/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(JSON.stringify(obj) === "{}") return true;
    if(JSON.stringify(obj) === "[]") return true;


    return false;
};