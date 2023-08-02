"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = Math.round(Math.random() * 9) + 1;
switch (num) {
    case 1:
        console.log("\u91D1\u8CDE");
        break;
    case 2:
        console.log("\u9280\u8CDE");
        break;
    case 3:
        console.log("\u9285\u8CDE");
        break;
    case 9:
        console.log("\u30D6\u30FC\u30D3\u30FC\u8CDE");
        break;
    default:
        console.log("\u30C6\u30A3\u30C3\u30B7\u30E5\u8CDE");
        break;
}
