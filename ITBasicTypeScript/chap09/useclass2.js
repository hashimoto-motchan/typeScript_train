"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student() {
        this.name = "";
        this.english = 0;
        this.math = 0;
        this.japanese = 0;
    }
    return Student;
}());
function showScoreSum(student) {
    var sum = student.english + student.math + student.japanese;
    console.log("".concat(student.name, "\u306E\u5408\u8A08\u5F97\u70B9: ").concat(sum));
}
var taro = new Student();
console.log(taro);
taro.name = "宮本太郎";
taro.english = 78;
taro.math = 82;
taro.japanese = 85;
showScoreSum(taro);
var hanako = new Student();
console.log(hanako);
hanako.name = "松下花子";
hanako.english = 91;
hanako.math = 80;
hanako.japanese = 87;
showScoreSum(hanako);
