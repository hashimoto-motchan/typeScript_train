"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var max = 0;
for (var i = 1; i <= 10; i++) {
    var num = Math.round(Math.random() * 100);
    console.log("".concat(i, "\u500B\u76EE\u306E\u4E71\u6570: ").concat(num));
    if (num > max) {
        max = num;
    }
}
console.log("\u6700\u5927\u5024: ".concat(max));
