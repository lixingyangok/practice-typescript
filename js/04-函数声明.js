"use strict";
function howOld(age, stature) {
    if (age === void 0) { age = 0; }
    var result = "\u4ECA\u5E74" + age + "\u5C81";
    if (stature)
        result += "\uFF0C\u800C\u4E14\u8EAB\u6750" + stature;
    return result;
}
console.log(howOld());
console.log(howOld(18));
console.log(howOld(22, '丰满'));
function getNames() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    var result = '得到参数：';
    names.forEach(function (cur) { return result += cur + "\u3001"; });
    result = result.replace(/、$/, '');
    return result;
}
console.log(getNames('张三', '李四'));
