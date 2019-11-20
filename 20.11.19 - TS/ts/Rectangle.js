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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(xPos, yPos, color, width, height) {
        var _this = _super.call(this, xPos, yPos, color) || this;
        _this._height = height;
        _this._width = width;
        return _this;
    }
    Rectangle.prototype.dispay = function () {
        _super.prototype.dispay.call(this);
        console.log("width: " + this._width);
        console.log("height: " + this._height);
    };
    Rectangle.prototype.getArea = function () {
        return (this._width * this._height) / 2;
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
