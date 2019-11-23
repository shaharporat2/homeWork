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
exports.__esModule = true;
var Human_1 = require("./Human");
var SimpleWorker = /** @class */ (function (_super) {
    __extends(SimpleWorker, _super);
    function SimpleWorker(f_name, l_name, address, salary) {
        var _this = _super.call(this, f_name, l_name) || this;
        _this._address = address;
        _this._salary = salary;
        return _this;
    }
    SimpleWorker.prototype.Show = function () {
        _super.prototype.Show.call(this);
        console.log("Address: " + this._address);
        console.log("Salary: " + this._salary);
    };
    return SimpleWorker;
}(Human_1.Human));
exports.SimpleWorker = SimpleWorker;
