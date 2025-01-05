class EventEmitter {

    constructor() {
        this.events = {}
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if(!this.events[eventName]) this.events[eventName] = {};
        if(this.events[eventName].sub_number == undefined) this.events[eventName].sub_number = 0;
        let id = this.#generateID(15);

        this.events[eventName][id] = {callback: callback, sub_number: this.events[eventName].sub_number + 1};
        this.events[eventName].sub_number += 1;

        return { 
                unsubscribe: () => {
                this.events[eventName][id] = undefined;
            }
        }
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if(!this.events[eventName]) this.events[eventName] = {};

        let temp_array = [];

        for(const [key, value] of Object.entries(this.events[eventName])) {
            if(key == "sub_number") continue;
            if(value === undefined) continue;
            temp_array.push({output: value.callback(...args), sub_number: value.sub_number});
        }

        temp_array.sort((a, b) => a.sub_number - b.sub_number);

        console.log(temp_array);

        let output_array = [];

        for(let i = 0; i < temp_array.length; i++) {
            output_array.push(temp_array[i].output);
        }

        return output_array;
    }

    #generateID(len) {
        let characters = "abcdefghijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ123456789";

        let id = "";

        for(let i = 0; i < len; i++) {
            id += characters[Math.floor(Math.random() * characters.length)];
        }

        return id;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
