"use strict";
var pName = 'Tom';
var age = 18;
var isPartyMember = false;
console.log('个人信息：', pName, age, isPartyMember);
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
