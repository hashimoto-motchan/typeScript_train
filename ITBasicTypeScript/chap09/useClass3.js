"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student() {
        this.name = "";
        this.english = 0;
        this.math = 0;
        this.japanese = 0;
    }
    Student.prototype.showScoreSum = function () {
        var sum = this.english + this.math + this.japanese;
        console.log("".concat(this.name, "\u306E\u5408\u8A08\u5F97\u70B9: ").concat(sum));
    };
    return Student;
}());
var taro = new Student();
taro.name = "宮本太郎";
taro.english = 78;
taro.math = 82;
taro.japanese = 85;
taro.showScoreSum();
var hanako = new Student();
hanako.name = "松下花子";
hanako.english = 91;
hanako.math = 80;
hanako.japanese = 87;
hanako.math = 82;
hanako.showScoreSum();
