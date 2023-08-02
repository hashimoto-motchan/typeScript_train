"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = Math.round(Math.random() * 100);
console.log("num\u306E\u5024\uFF1A ".concat(num));
if (num % 2 == 0 && num % 3 == 0) {
    console.log("2の倍数であり、しかも3の倍数");
}
else {
    console.log("それ以外");
}
console.log("処理終了");
