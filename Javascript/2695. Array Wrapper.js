/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.numbers = nums.flat(Infinity);
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let total = 0;
    
    for(let i = 0; i < this.numbers.length; i++) {
        total += this.numbers[i];
    }

    return total;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    let string = "[";

    for(let i = 0; i < this.numbers.length; i++) {
        string += `${i == 0 ? "" : ","}${this.numbers[i]}`;
    }

    return `${string}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */