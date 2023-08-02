"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var X = Math.round(Math.random() * 10);
var Y = Math.round(Math.random() * 10);
console.log("X\u306F".concat(X, "\u3001Y\u306F").concat(Y));
if (X == Y) {
    console.log("\u540C\u3058\uFF01");
}
else {
    console.log("\u9055\u3046\uFF01");
}
