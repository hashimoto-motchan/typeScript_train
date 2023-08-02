"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (var i = 1; i <= 10; i++) {
    var num = Math.round(Math.random() * 10);
    console.log("".concat(i, "\u500B\u76EE\u306E\u4E71\u6570: ").concat(num));
    if (num == 5) {
        console.log("5\u304C\u767A\u751F\u3057\u305F\u306E\u3067break");
        break;
    }
    console.log("".concat(i, "\u56DE\u76EE\u306E\u7E70\u308A\u8FD4\u3057\u51E6\u7406\u304C\u7121\u4E8B\u7D42\u4E86"));
}
console.log("\u5168\u3066\u306E\u51E6\u7406\u7D42\u4E86");
