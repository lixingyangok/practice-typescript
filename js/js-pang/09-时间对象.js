"use strict";
var d01 = Date(); //返回字符
var d02 = new Date(); //返回对象
console.log(typeof d01);
console.log(typeof d02);
console.log(d02.toLocaleString());
// 
var d03 = new Date(9999999999);
var d04 = new Date('2019-01-01 18:18:18');
var d05 = new Date('2019.01.01 18:18:18');
var d06 = new Date('2019.5.02 18:18:18');
console.log(d03.toLocaleString());
console.log(d04.toLocaleString());
console.log(d05.toLocaleString());
console.log(d06.toLocaleString());
