"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var year = Math.round(Math.random() * 120) + 1901;
console.log(year);
if (year < 1912) {
    console.log("".concat(year, "\u5E74\u306F\u660E\u6CBB"));
}
else if (year < 1926) {
    console.log("".concat(year, "\u5E74\u306F\u5927\u6B63"));
}
else if (year < 1989) {
    console.log("".concat(year, "\u5E74\u306F\u662D\u548C"));
}
else if (year < 2019) {
    console.log("".concat(year, "\u5E74\u306F\u5E73\u6210"));
}
else {
    console.log("".concat(year, "\u5E74\u306F\u4EE4\u548C"));
}
