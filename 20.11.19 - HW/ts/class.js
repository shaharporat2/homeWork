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
function randArry(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
}
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.display = function () {
        console.log("Name: " + this.name);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Cat.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Age: " + this.age);
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    Dog.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Color: " + this.color);
    };
    return Dog;
}(Animal));
var obj;
var c = new Cat("Mitsi", 4);
var d = new Dog("Prince", "Brown");
function createAnimal(ani) {
    if (Math.random() < 0.5) {
        obj = new Cat("Mitsi", 5);
    }
    else {
        obj = new Dog("Prince", "Red");
    }
}
function createReport(obj) {
    obj.display();
}
// if( obj instanceof Cat ){
//     console.log("The age of the cat is: " + (obj as Cat).age)
// }else{
//     console.log("The color of the dog is: " + (obj as Dog).color)
// }
createReport(c);
createReport(d);
