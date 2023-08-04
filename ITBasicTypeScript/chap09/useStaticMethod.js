"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Radius = /** @class */ (function () {
    function Radius() {
    }
    Radius.showCircumference = function (radius) {
        var circumference = 2 * 3.14 * radius;
        console.log("\u534A\u5F84".concat(radius, "\u306E\u5186\u5468\u306E\u9577\u3055: ").concat(circumference));
    };
    return Radius;
}());
Radius.showCircumference(5);
