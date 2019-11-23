"use strict";
exports.__esModule = true;
var FlashLight = /** @class */ (function () {
    function FlashLight(color, length, volume, num_og_battaries) {
        this._color = color;
        this._length = length;
        this._volume = volume;
        this._num_of_battaries = num_og_battaries;
        this._status = "Off";
    }
    FlashLight.prototype.turnOn = function () {
        if (this._status === "On") {
            throw new Error("FlashLight is already On");
        }
        else {
            this._status = "On";
            console.log("FlashLight is On!");
        }
    };
    FlashLight.prototype.turnOff = function () {
        if (this._status === "Off") {
            throw new Error("FlashLight is already Off");
        }
        else {
            this._status = "Off";
            console.log("FlashLight is Off!");
        }
    };
    FlashLight.prototype.changeBattaries = function () {
        console.log("Changing battaries");
    };
    FlashLight.prototype.showDetails = function () {
        console.log("Color: " + this._color);
        console.log("Length: " + this._length);
        console.log("Current volume: " + this._volume);
        console.log("Number of battaries: " + this._num_of_battaries);
        console.log("Status" + this._status);
    };
    return FlashLight;
}());
exports.FlashLight = FlashLight;
