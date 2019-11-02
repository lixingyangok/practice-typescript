"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ▼声明时标注变量类型
var pName = 'Tom';
var age = 18;
var info = {}; //对象，数组皆可
info = [];
var isPartyMember = false;
var other = undefined; //只能放undefined
var other1 = undefined; //只能放undefined
var other2 = null; //只能放null
console.log('个人信息：', pName, age, isPartyMember);
// ▼如果没有标注，但有初始变量，会进行类型推导
var numberVariable = 0;
var stringVariable = '';
// ▼非法调用方法会报错（在编译阶段报错）因为此类型的变量没有其调用的方法
// numberVariable.replace(0, 99); 
// stringVariable.toFixed(3); 
// ▼非法赋值也会报错
// numberVariable='18';
// ▼枚举
var season;
(function (season) {
    season[season["spring"] = 0] = "spring";
    season[season["summer"] = 1] = "summer";
    season[season["fall"] = 2] = "fall";
    season[season["winter"] = 3] = "winter";
})(season || (season = {}));
;
console.log('季节枚举：', season);
var sex;
(function (sex) {
    sex["man"] = "\u7537";
    sex["woman"] = "\u5973";
})(sex || (sex = {}));
;
console.log('性别枚举：', sex);
// ▼任意型
var msg;
msg = 18;
console.log(msg);
msg = '一百';
console.log(msg);
// ------------------------------
// 类型断言
var oneVal = 'I like programing';
var twoVal = oneVal.substr(0, 6);
var twoVal_ = oneVal.substr(0, 6);
console.log(twoVal, twoVal_);
