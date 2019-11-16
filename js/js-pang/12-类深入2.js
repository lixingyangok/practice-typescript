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
