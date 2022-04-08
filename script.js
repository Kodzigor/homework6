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


const charIndexOf = (str, char) => {
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] !== char) {
            continue;
        } else {
            return i;
        }
    }
    return -1;
};

let res2 = charIndexOf('La-la-la, this is?', ',');
console.log(res2);


const cilinder = {
    height: 12,
    radius: 6,
    get volume() {
      return Math.round(Math.PI * (this.radius ** 2) * this.height);
    },
    get square() {
      return Math.round(((2 * Math.PI) * (this.radius ** 2)) + ((2 * Math.PI) * this.radius * this.height));
    }
  };

console.log(cilinder.square);
console.log(cilinder.volume);



const getResult = (num1, num2, symb) => {
    let res = 0;
    switch(symb) {
      case('+'):
        res = num1 + num2;
        break;
      case ('-'):
        res = num1 - num2;
        break;
      case ('*'):
        res = num1 * num2;
        break;
      case ('/'):
        res = num1 / num2;
        break;
      case ('**'):
        res = num1 ** num2;
        break;
      case ('%'):
        res = num1 % num2;
        break;    
    }
        return res;
  }
  let res = getResult(9, 3, '-');
  console.log(res);