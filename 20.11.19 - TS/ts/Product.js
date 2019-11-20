"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
    Product.prototype.display = function () {
        console.log("name: " + this._name);
        console.log("price: " + this._price);
    };
    return Product;
}());
exports.Product = Product;
