"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = Math.round(Math.random() * 70) + 1950;
// console.log(num);
var year_remainder = num % 4;
if (year_remainder == 0) {
    console.log("".concat(num, "\u5E74\u306F\u958F\u5E74\u3067\u3059\u3002"));
}
else {
    console.log("".concat(num, "\u5E74\u306F\u958F\u5E74\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"));
}
