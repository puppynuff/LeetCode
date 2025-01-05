class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        // if(typeof value !== "number" || typeof this.result !== "number") return this;
        this.result = value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        // if(typeof value !== "number" || typeof this.result !== "number") return this;
        this.result += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        // if(typeof value !== "number" || typeof this.result !== "number") return this;
        this.result -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        // if(typeof value !== "number" || typeof this.result !== "number") return this;
        this.result = this.result * value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        // if(typeof value !== "number" || typeof this.result !== "number") return this;
        if(value === 0) {
            this.result = "Division by zero is not allowed";
            return this;
        }

        this.result = this.result / value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        // if(typeof value !== "number" || typeof this.result !== "number") return this;
        this.result = this.result**value;
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}