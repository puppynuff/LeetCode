var TimeLimitedCache = function() {
    this.keys = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(this.keys[key] === undefined) {
        this.keys[key] = { value, expiry_time: Date.now() + duration};
        setTimeout(() => {if(this.keys[key]?.expiry_time <= Date.now()) this.keys[key] = undefined}, duration);
        return false;
    }


    this.keys[key] = { value, expiry_time: Date.now() + duration};
    setTimeout(() => {if(this.keys[key]?.expiry_time <= Date.now()) this.keys[key] = undefined}, duration);
    return true;

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    current_key = this.keys[key];
    if(current_key?.expiry_time <= Date.now()) {
        this.keys[key] == undefined;
        current_key == undefined;
    }
    if(current_key !== undefined) return current_key.value;

    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0;
    for(const [key, value] of Object.entries(this.keys)) {
        if(this.keys[key]?.expiry_time <= Date.now()) {
            this.keys[key] = undefined;
            value = undefined;
        }
        if(value === undefined) continue;
        count += 1;
    }

    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */