"use strict";
exports.__esModule = true;
var Chair = /** @class */ (function () {
    function Chair(matirial, color, lenght, width, height) {
        this._matirial = matirial;
        this._color = color;
        this._width = width;
        this._lenght = lenght;
        this._height = height;
        this._capacity = this._height * this._lenght * this._width;
    }
    Chair.prototype.showDetails = function () {
        console.log("Color: " + this._color);
        console.log("Matirail: " + this._matirial);
        console.log("Length: " + this._lenght);
        console.log("Width: " + this._width);
        console.log("Height: " + this._height);
        console.log("Capacity: " + this._capacity);
    };
    return Chair;
}());
exports.Chair = Chair;
