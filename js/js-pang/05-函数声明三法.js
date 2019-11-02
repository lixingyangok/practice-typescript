"use strict";
// ▼用 function 
function getSum(n01, n02) {
    return n01 + n02;
}
console.log(getSum(1, 2));
// ▼用赋值的方式
var getSum02 = function (n01, n02) {
    return n01 + n02;
};
console.log(getSum02(3, 4));
var getSum03 = function (n01, n02) {
    return n01 + n02;
};
console.log(getSum03(5, 6));
