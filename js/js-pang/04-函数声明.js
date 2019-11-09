"use strict";
// ▼参数要标注类型，也可定义默认值，
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
console.log(getNames('张三', '李四') //这里参数只能传入字符串，否则报错
);
function showErrow(msg) {
    throw new Error('抛出错误：' + msg); //比return力度大
    console.log('抛出错误02'); //执行不到
}
// showErrow('请注意');
function giveMeObj(params) {
    console.log(Object.keys(params) || '无');
}
giveMeObj({ a: 1, b: 2 });
giveMeObj([1, 2, 3]);
function showSomeone(pInfo) {
    console.log(pInfo.name + "\u6765\u4E86\uFF0C\u4ED6\u4ECA\u5E74" + pInfo.age + "\u5C81");
}
showSomeone({ name: 'tom', age: 18 }); //正常传参，不报错
// showSomeone( {name:'tom'} ); //传参错误，报错
showSomeone({ name: 'tom' }); //添加断言，不报错（忽悠当前参数符合 pInfo 这个接口
