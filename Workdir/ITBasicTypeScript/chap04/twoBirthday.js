"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var year_A = Math.round(Math.random() * 68) + 1950;
console.log(year_A);
var year_B = Math.round(Math.random() * 68) + 1950;
console.log(year_B);
if (year_A >= 1989 && year_B >= 1989) {
    console.log("A\u3055\u3093\u3082B\u3055\u3093\u3082\u5E73\u6210\u751F\u307E\u308C");
}
else if (year_A >= 1989 || year_B >= 1989) {
    console.log("\u3069\u3061\u3089\u304B\u304C\u5E73\u6210\u751F\u307E\u308C");
}
else {
    console.log("\u4E21\u65B9\u3068\u3082\u662D\u548C\u751F\u307E\u308C");
}
