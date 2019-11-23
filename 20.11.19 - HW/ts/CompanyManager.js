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
var SimpleWorker_1 = require("./SimpleWorker");
var CompanyManager = /** @class */ (function (_super) {
    __extends(CompanyManager, _super);
    function CompanyManager(f_name, l_name, address, salary, bonous, seniority) {
        var _this = _super.call(this, f_name, l_name, address, salary) || this;
        _this._seniority = seniority;
        _this._bonous = bonous;
        return _this;
    }
    CompanyManager.prototype.Show = function () {
        _super.prototype.Show.call(this);
        console.log("Seniority: " + this._seniority);
        console.log("Bonous: " + this._bonous);
    };
    return CompanyManager;
}(SimpleWorker_1.SimpleWorker));
exports.CompanyManager = CompanyManager;
