"use strict";
var Girl = /** @class */ (function () {
    function Girl(name, age) {
        this.name = name;
        this.age = age;
    }
    Girl.prototype.toIntroduce = function () {
        console.log(this.name, this.age);
    };
    return Girl;
}());
var girl01 = new Girl('Sara', 18);
girl01.toIntroduce();
