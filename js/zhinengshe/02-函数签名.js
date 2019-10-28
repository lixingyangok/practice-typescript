"use strict";
function sayHello(name, fn) {
    console.log(name);
    fn(name + "__" + new Date().toLocaleString());
}
sayHello('tom', function (str) {
    console.log(str);
});
function actor(info) {
    console.log(info.name, info.skill.join('，'));
}
// function actress( info:object ) { //报错
//     console.log(info.name, info.skill.join('，'));
// }
actor({
    name: 'Tom',
    skill: ['sing', 'dance'],
});
