"use strict";
// ▼声明时标注变量类型
var pName = 'Tom';
var age = 18;
var isPartyMember = false;
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
