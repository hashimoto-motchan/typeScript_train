"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var month = Math.round(Math.random() * 11) + 1;
switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("".concat(month, "\u6708\u306F\u6625\uFF01"));
        break;
    case 6:
        console.log("".concat(month, "\u6708\u306F\u6885\u96E8\uFF01"));
        break;
    case 7:
    case 8:
    case 9:
        console.log("".concat(month, "\u6708\u306F\u590F\uFF01"));
        break;
    case 7:
    case 10:
    case 11:
        console.log("".concat(month, "\u6708\u306F\u79CB\uFF01"));
        break;
    case 12:
    case 1:
    case 2:
        console.log("".concat(month, "\u6708\u306F\u51AC\uFF01"));
        break;
}
