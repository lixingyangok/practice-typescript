"use strict";
console.log(window.$);
var oneName = 'Tom'; //类型推导为字符串
// oneName = 100; //报错
var theirAge; //联合类型
theirAge = '18';
console.log(theirAge);
theirAge = 19;
console.log(theirAge);
// theirAge={}; //报错
