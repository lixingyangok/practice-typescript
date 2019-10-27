"use strict";
var Zhang;
(function (Zhang) {
    Zhang.Xiaoming = {
        name: '小明',
        age: 18,
    };
})(Zhang || (Zhang = {}));
var Wang;
(function (Wang) {
    Wang.Xiaoming = {
        name: '小明',
        age: 18,
    };
})(Wang || (Wang = {}));
console.log(Zhang.Xiaoming);
console.log(Wang.Xiaoming);
