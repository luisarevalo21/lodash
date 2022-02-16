const _ = {
  clamp(num, lowerNum, upperNum) {
    const lowerNumber = Math.max(num, lowerNum);

    return Math.min(lowerNumber, upperNum);
  },

  inRange(num, start = 0, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (start > end) {
      const swap = start;
      start = end;
      end = swap;
      console.log(start, end);
    }

    return num >= start && num < end;
  },

  words(phrase = "") {
    return phrase.split(" ");
  },

  pad(string = "", length) {
    if (string.length > length) return string;

    const totalPadding = length - string.length;
    const leftPadding = Math.floor(totalPadding / 2);
    const rightPadding = totalPadding - leftPadding;

    return " ".repeat(leftPadding) + string + " ".repeat(rightPadding);
  },

  has(obj, key) {
    return obj[key] !== undefined;
  },

  invert(obj) {
    const invertedObject = {};

    // console.log(Object.keys(obj));
    // Object.keys(obj).map(key => {
    //   console.log(key);
    //   //   const originalValue = obj[key];
    //   //   invertedObject[originalValue] = key;
    // });

    // console.log(obj);
    // console.log(invertedObject);

    for (let key in obj) {
      const originalValue = obj[key];
      invertedObject[originalValue] = key;
    }

    console.log(obj);
    console.log(invertedObject);
    return invertedObject;

    // return Object.keys(obj).map(key => (newObject[obj.key] = obj[key]));

    // return Object.keys(obj).map(key => newObject[key]);
  },

  findKey(obj, predFunc) {
    for (const key in obj) {
      if (predFunc(obj[key])) {
        return key;
      }
    }
    return undefined;
  },

  drop(array, number) {
    let num;
    if (number === undefined) {
      num = 1;

      return array.slice(1);
    }
    return array.slice(number);

    //my solution
    // let myArray = array;
    // if (number === undefined) {
    //   console.log("inside if");
    //   myArray.shift();
    //   return myArray;
    // }

    // return myArray.filter((element, index) => index >= number);
  },

  dropWhile(array, predFunc) {
    let sliced;
    for (let i = 0; i < array.length; i++) {
      if (predFunc(array[i], i, array) !== true) {
        sliced = i;
      }
    }

    return this.drop(array, sliced);

    // const index = array.findIndex(
    //   (element, index) => !predFunc(element, index, array)
    // );

    // console.log(index);
    // return this.drop(array, index);
  },

  chunk(array, size) {
    if (size === undefined) {
      return array.map(element => [element]);
    }

    const arrayChunks = [];

    for (let i = 0; i < array.length; i += size) {
      const finalArray = array.slice(i, size + i);

      arrayChunks.push(finalArray);
    }
    return arrayChunks;
  },
};

console.log(_.chunk([1, 2, 3, 4, 5, 6]));
// const indexIsSmallerThanElement = (element, index) => index < element;

// console.log(_.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement));
// console.log(_.invert({ originalKey: "2" })["originalValue"], "originalKey");

// invert({originalKey: "originalValue"})["originalValue"])
// _.pad("hi", 6) returned hi instead of   hi  .
// 3
// 4 - Returns oddly-padded strings with extra padding on right side - Failed: _.pad("hi", 5) returned hi instead of  hi  .
// luisarevalo@Luis-MBP-3 lodash %

// console.log(_.clamp(8, 3, 9));

// console.log(_.inRange(3, 4, 2));
// console.log(_.words("hello world"));

// Do not write or modify code below this line.
module.exports = _;

// my solution
// inRange(){}
// if (num >= start && num < end) {
//   return true;
// } else if (start > end) {
//   console.log(start, end);
//   const swap = start;
//   start = end;
//   end = swap;
//   console.log(start, end);
//   if (num >= start && num < end) {
//     return true;
//   }
// }
// if (end === undefined) {
//   console.log("testing end is empty");
//   end = start;
//   start = 0;
//   console.log(start, end);
//   if (num >= start && num < end) {
//     return true;
//   }
// }
// if (num < start) return false;
// if (num >= end) return false;

//my solution
//pad()
// if (string.length > length) return string;
// const padding = Math.abs(string.length - length);
// if (padding % 2 === 0) {
//   return " ".repeat(padding / 2) + string + " ".repeat(padding / 2);
// } else {
//   const left = Math.floor(padding / 2);
//   const right = padding - left;
//   return " ".repeat(left) + string + " ".repeat(right);
// }
