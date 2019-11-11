"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Man = /** @class */ (function () {
    function Man(name) {
        this.name = name;
    }
    Man.prototype.sayName = function () {
        console.log("I'm " + this.name);
    };
    Man.prototype.getUpperName = function () {
        return this.name.toUpperCase();
    };
    return Man;
}());
var Singer = /** @class */ (function (_super) {
    __extends(Singer, _super);
    function Singer(name, songs) {
        var _this = _super.call(this, name) || this;
        _this.songs = songs;
        return _this;
    }
    Singer.prototype.toSing = function () {
        console.log(this.getUpperName());
        console.log("I can sing\uFF1A " + this.songs.length + " song/s");
    };
    return Singer;
}(Man));
var man01 = new Man('Tom');
man01.sayName();
// 
var singer01 = new Singer('Sara', ['song01']);
singer01.sayName();
singer01.toSing();
