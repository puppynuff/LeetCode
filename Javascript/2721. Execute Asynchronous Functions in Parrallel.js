/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let values = [];

        let completed_functions = 0;
        for(let i = 0; i < functions.length; i++) {
            values[i] = 0;
            functions[i]().then((returned_value) => {
                completed_functions += 1;
                values[i] = returned_value;
                if(completed_functions == functions.length) resolve(values);
            }).catch(reject)
        }
    })
};



/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */