"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr01 = []; //声明一个【成员为数值】的数组
arr01 = [1, 2, 3]; //赋值一个【成员为数值的数组】可以
console.log(arr01);
// ▼错误示范
// arr01=['1']; //错误赋值
// arr01.push('4') //错误赋值
// ------------------------------------------------------------
var arr02 = []; //声明一个【成员为字符】的数据
var arr03 = []; //声明一个【成员为字符】的数据
var arr04 = []; //声明一个【成员为字符】的数据
arr02.push('1');
arr03.push('1');
arr04.push(true);
console.log(arr02);
console.log(arr03);
console.log(arr04);
