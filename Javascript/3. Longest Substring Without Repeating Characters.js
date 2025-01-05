//? Runtime: 222ms
//? Memory: 59.13MB

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    s = s.split("");
    let longest_array = [];
    let current_array = [];

    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length; j++) {
            if((j + i) >= s.length) break;

            if(!current_array.includes(s[j + i])) {
                current_array.push(s[j + i]);
            } else {
                if(current_array.length > longest_array.length) {
                    longest_array = current_array;
                }

                current_array = [];
                break;
            }
        }
    }

    if(current_array.length > longest_array.length) return current_array.length;

    console.log(longest_array);

    return longest_array.length;

};