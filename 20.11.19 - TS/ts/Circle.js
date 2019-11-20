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
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(xPos, yPos, color, radius) {
        var _this = _super.call(this, xPos, yPos, color) || this;
        _this._radius = radius;
        return _this;
    }
    Circle.prototype.dispay = function () {
        _super.prototype.dispay.call(this);
        console.log("radius: " + this._radius);
    };
    Circle.prototype.getArea = function () {
        return (this._radius) * Math.PI;
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
