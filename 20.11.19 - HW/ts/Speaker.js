"use strict";
exports.__esModule = true;
var Speaker = /** @class */ (function () {
    function Speaker(color, volume) {
        this._color = color;
        this._volume = volume;
        this._status = "Off";
    }
    Speaker.prototype.turnOn = function () {
        if (this._status === "On") {
            throw new Error("Speaker is already On");
        }
        else {
            this._status = "On";
            console.log("Speaker is On!");
        }
    };
    Speaker.prototype.turnOff = function () {
        if (this._status === "Off") {
            throw new Error("Speaker is already Off");
        }
        else {
            this._status = "Off";
            console.log("Speaker is Off!");
        }
    };
    Speaker.prototype.makeVoice = function (text) {
        console.log(text);
    };
    Speaker.prototype.showDetails = function () {
        console.log("Color: " + this._color);
        console.log("Current volume: " + this._volume);
        console.log("Status" + this._status);
    };
    return Speaker;
}());
exports.Speaker = Speaker;
