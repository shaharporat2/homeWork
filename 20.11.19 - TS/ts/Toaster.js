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
var ElectronicProduct_1 = require("./ElectronicProduct");
var Toaster = /** @class */ (function (_super) {
    __extends(Toaster, _super);
    function Toaster(name, price, manufacturer, model, optimalHeat) {
        var _this = _super.call(this, name, price, manufacturer, model) || this;
        _this._optimalHeat = optimalHeat;
        return _this;
    }
    Toaster.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("optimal heat: " + this._optimalHeat);
    };
    return Toaster;
}(ElectronicProduct_1.ElectronicProduct));
exports.Toaster = Toaster;
