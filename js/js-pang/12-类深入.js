"use strict";
var Person = /** @class */ (function () {
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Person.prototype.toIntroduce = function () {
        console.log(this.name, this.age, this.sex);
    };
    Person.prototype.sayName = function () {
        console.log(this.name);
    };
    Person.prototype.sayAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var p01 = new Person('Gaga', 18, 'woman');
console.log('性别：', p01.sex); //public 属性可随意访问
// console.log( '姓名：', p01.name ); //protected 只能在类本身、子类访问
// console.log( '年龄：', p01.age ); //private 只能在类本身访问
p01.toIntroduce(); // public 方法随意调用
// p01.sayName(); // protected 方法只能在类本身、子类调用
// p01.sayAge(); // private 方法只能在类本身调用
p01.sex += '——';
p01.toIntroduce();
// p01.name += '——'; // 只读属性不可修改
