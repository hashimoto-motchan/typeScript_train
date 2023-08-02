"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (var i = 0; i < 5; i++) {
    var num1 = Math.round(Math.random() * 100);
    if (num1 == 0) {
        console.log("num\u304C0\u306A\u306E\u3067break");
        break;
    }
    for (var i_1 = 0; i_1 < 5; i_1++) {
        var num2 = Math.round(Math.random() * 100);
        console.log(num2 / num1);
    }
}
