"use strict";
exports.__esModule = true;
var Shape = /** @class */ (function () {
    function Shape(xPos, yPos, color) {
        this._xPos = xPos;
        this._yPos = yPos;
        this._color = color;
    }
    Shape.prototype.dispay = function () {
        console.log("xPos: " + this._xPos);
        console.log("yPos: " + this._yPos);
        console.log("color: " + this._color);
    };
    return Shape;
}());
exports.Shape = Shape;
