"use strict";
function sayHello(name, fn) {
    console.log(name);
    fn(name + "__" + new Date().toLocaleString());
}
sayHello('tom', function (str) {
    console.log(str);
});
