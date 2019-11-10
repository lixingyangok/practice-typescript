"use strict";
// ▼用接口约束对象
var boyTom = {
    name: 'Tom',
    sex: '男',
};
// ▼用接口约束方法的参数
function toLogHuman(thisOne) {
    console.log(thisOne.name, thisOne.sex);
}
toLogHuman(boyTom);
toLogHuman({ name: 'Sara', sex: '女' });
// ▼用接口约束一个方法的形态
var getSumFn = function (n01, n02) {
    return n01 + n02;
};
var getProduct = function (n01, n02) {
    return n01 * n02;
};
console.log(getSumFn(3, 3));
console.log(getProduct(3, 3));
;
var TimeClass = /** @class */ (function () {
    function TimeClass() {
        this.nowTime = new Date(); //★没这句就报错
        this.getMyTime();
    }
    TimeClass.prototype.getMyTime = function () {
        console.log('★时间★', this.nowTime.toLocaleString());
    };
    return TimeClass;
}());
new TimeClass();
var tom = {
    name: 'tom',
    sex: 0,
};
console.log('调用tom的只读属性：', tom.name);
var person01 = {
    name: 'tom',
    age: 18,
    hobby: 'running',
    father: 'old tom',
};
