"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, english, math, japanese) {
        this._name = "";
        this._english = 0;
        this._math = 0;
        this._japanese = 0;
        this._name = name;
        this._english = english;
        this._math = math;
        this._japanese = japanese;
    }
    Student.prototype.showScoresSum = function () {
        var sum = this._english + this._math + this._japanese;
        console.log("".concat(this._name, "\u306E\u5408\u8A08\u5F97\u70B9: ").concat(sum));
    };
    Object.defineProperty(Student.prototype, "english", {
        set: function (value) {
            if (value < 0) {
                value = 0;
            }
            this._english = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.english = -20;
console.log(taro);
