"use strict";
var str01 = 'hello world';
var str02 = 'hello world';
var str03 = new String('hello world');
console.log(str01 === str02); //true
console.log(str01 == str03); //true
console.log(str01 === str03); //false
