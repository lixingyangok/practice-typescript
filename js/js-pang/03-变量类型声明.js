"use strict";
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
// (stringVariable as number).toFixed(3); //尝试用断言防止报错，没成功
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
var sex;
(function (sex) {
    sex["man"] = "\u7537";
    sex["woman"] = "\u5973";
})(sex || (sex = {}));
;
var sex02;
(function (sex02) {
    sex02[sex02["\u7537"] = 0] = "\u7537";
})(sex02 || (sex02 = {}));
; // 枚举值可以是中文
// enum sex03 { 1, 2 }; //枚举值不可为数字
var zhang01;
// zhang01 = ''; //非法赋值
zhang01 = sex.man; //合法赋值
console.log('季节枚举：', season);
console.log('性别枚举：', sex);
console.log('zhang01：', zhang01);
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
// -------------
// ▼只读数据
var sevenDays = [1, 2, 3, 4, 5, 6, 7];
console.log(sevenDays[0]);
// sevenDays.push(8); //报错，不可修改
