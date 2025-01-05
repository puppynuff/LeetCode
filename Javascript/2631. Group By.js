/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let output_map = {

    };

    for(let i = 0; i < this.length; i++) {
        if(output_map[fn(this[i])] == undefined) output_map[fn(this[i])] = [];
        output_map[fn(this[i])].push(this[i]);
    }


    return output_map;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */