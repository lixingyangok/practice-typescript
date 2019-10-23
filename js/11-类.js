"use strict";
var Girl = /** @class */ (function () {
    function Girl(info) {
        // for( let [key, val] of Object.entries( info ) ){
        //     console.log( key, ' = ', val );
        //     this[key] = val;
        // }
        this.name = info.name;
        this.age = info.age;
    }
    Girl.prototype.toIntroduce = function () {
        console.log(this.name, this.age);
    };
    return Girl;
}());
var girl01 = new Girl({
    name: 'Rose',
    age: 18,
});
girl01.toIntroduce();
