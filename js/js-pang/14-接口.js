"use strict";
var boyTom = {
    name: 'Tom',
    sex: '男',
};
console.log(boyTom);
var getSumFn = function (n01, n02) {
    return n01 + n02;
};
var getProduct = function (n01, n02) {
    return n01 * n02;
};
console.log(getSumFn(3, 3));
console.log(getProduct(3, 3));
