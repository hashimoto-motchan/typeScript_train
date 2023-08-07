"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Greetings = /** @class */ (function () {
    // name: string = "";
    //コンストラクタ。名前を受け取りプロパティに格納する。
    function Greetings(name) {
        //名前のプロパティ。
        this.name = "";
        this.name = name;
    }
    //「こんにちは」と表示するメソッド。
    Greetings.prototype.sayHello = function () {
        console.log("".concat(this.name, " \u3055\u3093\u3001\u3053\u3093\u306B\u3061\u306F"));
    };
    return Greetings;
}());
var HelloWithNice = /** @class */ (function (_super) {
    __extends(HelloWithNice, _super);
    function HelloWithNice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWithNice.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        console.log("\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\uFF01");
    };
    return HelloWithNice;
}(Greetings));
var saburo = new HelloWithNice("宮西三郎");
saburo.sayHello();
