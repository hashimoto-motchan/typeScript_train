"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = Math.round(Math.random() * 100);
console.log("\u70B9\u6570\u306F".concat(num, "\u70B9\u3067\u3059\u3002"));
var rem = num % 2;
if (rem == 0) {
    console.log("偶数");
}
else {
    console.log("奇数");
}
console.log("処理終了");
