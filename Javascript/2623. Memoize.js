/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cached_args = new Map();
    return function(...args) {
        let access_text = JSON.stringify(args);
        if(access_text in cached_args) return cached_args[access_text];
        let output = fn(...args);
        cached_args[access_text] = output;
        return output;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */