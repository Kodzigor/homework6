"use strict"
const isCharPresent = (str, char) => {
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] !== char) {
            continue;
        } else {
            return true;
        }

    }
    return false;
};

let res1 = isCharPresent('Igot 1986?', '8');
console.log(res1);