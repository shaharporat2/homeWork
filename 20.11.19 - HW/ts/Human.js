"use strict";
exports.__esModule = true;
var Human = /** @class */ (function () {
    function Human(f_name, l_name) {
        this._f_name = f_name;
        this._l_name = l_name;
    }
    Human.prototype.Show = function () {
        console.log("First name: " + this._f_name);
        console.log("Last name: " + this._l_name);
    };
    return Human;
}());
exports.Human = Human;
