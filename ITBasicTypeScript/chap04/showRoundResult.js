"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = Math.round(Math.random() * 10);
console.log("\u6570\u5B57\u306F".concat(score));
if (score < 5) {
    console.log("四捨五入すると0");
}
else {
    console.log("四捨五入すると10");
}
