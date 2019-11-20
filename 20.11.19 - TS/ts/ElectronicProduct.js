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
var Product_1 = require("./Product");
var ElectronicProduct = /** @class */ (function (_super) {
    __extends(ElectronicProduct, _super);
    function ElectronicProduct(name, price, manufacturer, model) {
        var _this = _super.call(this, name, price) || this;
        _this._manufacturer = manufacturer;
        _this._model = model;
        return _this;
    }
    ElectronicProduct.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("manufacturer: " + this._manufacturer);
        console.log("model: " + this._model);
    };
    return ElectronicProduct;
}(Product_1.Product));
exports.ElectronicProduct = ElectronicProduct;
