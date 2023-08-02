"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var year = Math.round(Math.random() * 120) + 1901;
console.log(year);
if (year < 1912) {
    var ImperialEra = year - 1868 + 1;
    console.log("".concat(year, "\u5E74\u306F\u660E\u6CBB").concat(ImperialEra, "\u5E74\u3067\u3059\u3002"));
}
else if (year < 1926) {
    var ImperialEra = year - 1912 + 1;
    console.log("".concat(year, "\u5E74\u306F\u5927\u6B63").concat(ImperialEra, "\u5E74\u3067\u3059\u3002"));
}
else if (year < 1989) {
    var ImperialEra = year - 1926 + 1;
    console.log("".concat(year, "\u5E74\u306F\u662D\u548C").concat(ImperialEra, "\u5E74\u3067\u3059\u3002"));
}
else if (year < 2019) {
    var ImperialEra = year - 1989 + 1;
    console.log("".concat(year, "\u5E74\u306F\u5E73\u6210").concat(ImperialEra, "\u5E74\u3067\u3059\u3002"));
}
else {
    var ImperialEra = year - 2019 + 1;
    console.log("".concat(year, "\u5E74\u306F\u4EE4\u548C").concat(ImperialEra, "\u5E74\u3067\u3059\u3002"));
}
