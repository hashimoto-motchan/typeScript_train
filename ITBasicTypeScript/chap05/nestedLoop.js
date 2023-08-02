"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("外のループ開始");
for (var i = 1; i <= 3; i++) {
    console.log("内ループ開始");
    for (var j = 1; j <= 3; j++) {
        console.log("i:j->".concat(i, ":").concat(j));
    }
    console.log("\u5185\u30EB\u30FC\u30D7\u7D42\u4E86");
}
console.log("\u5916\u306E\u30EB\u30FC\u30D7\u7D42\u4E86");
