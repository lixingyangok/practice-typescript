"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类（用于约束子类
var Dancer = /** @class */ (function () {
    function Dancer(name, age) {
        this.name = name;
        this.age = age;
        // 
    }
    return Dancer;
}());
var NationalDancer = /** @class */ (function (_super) {
    __extends(NationalDancer, _super);
    function NationalDancer(name, age) {
        // 必须提交父类要求的2个参数，不可省略、遗漏
        return _super.call(this, name, age) || this;
    }
    // ▼你类声明必须有这个方法，没有就报错
    NationalDancer.prototype.dance = function () {
        console.log('我跳：民族舞');
    };
    NationalDancer.prototype.sing = function () {
        console.log('我唱：红歌');
    };
    return NationalDancer;
}(Dancer));
// let dancer01 = new Dancer( 'Mr Zhang', 18 ); //不可创建抽象类实例
var dancer01 = new NationalDancer('Mr Zhang', 18);
var dancer02 = new NationalDancer('Mr Wang', 18);
dancer01.dance();
dancer01.sing();
// dancer02.sing(); // 标注类型为 Dancer 是不能调用 NationalDancer 的专属方法的, 报错
// ————————————————————————————————————————————————————————
// ▼泛型类
var Info = /** @class */ (function () {
    function Info(code) {
        this.code = code;
    }
    Info.prototype.sayCode = function () {
        console.log(this.code);
        return this.code;
    };
    return Info;
}());
var code01 = new Info(123);
var code02 = new Info('abc');
code01.sayCode();
code02.sayCode();
// ▼指定参数必需有 length 属性
function getLength(params) {
    console.log(params + "\u957F\u5EA6\uFF1A ", params.length);
}
getLength('asdf');
getLength([1, 2, 3]);
// ▼验证二参的 tp02 应为一参的一个键
function getValByKey(obj, key) {
    console.log('getValByKey：', obj[key]);
}
getValByKey('abc', 'length'); //abc 具备 length 属性，通过
// getValByKey( 18, 'length'); // 18 不具备 length 属性，报错
