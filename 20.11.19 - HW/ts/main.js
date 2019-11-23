"use strict";
exports.__esModule = true;
var Speaker_1 = require("./Speaker");
var FlashLight_1 = require("./FlashLight");
var Chair_1 = require("./Chair");
var Human_1 = require("./Human");
var SimpleWorker_1 = require("./SimpleWorker");
var CompanyManager_1 = require("./CompanyManager");
var CIO_1 = require("./CIO");
var s1 = new Speaker_1.Speaker("Red", 9);
var s2 = new Speaker_1.Speaker("Blue", 7);
s1.showDetails();
s1.turnOn();
s1.makeVoice("My name is XXX");
s1.turnOff();
try {
    s1.turnOff();
}
catch (err) {
    console.log(err.message);
}
var f1 = new FlashLight_1.FlashLight("Green", 4, 3, 4);
f1.showDetails();
f1.changeBattaries();
f1.turnOn();
f1.turnOff();
var c1 = new Chair_1.Chair("Wood", "Brown", 3, 3, 3);
c1.showDetails();
var h1 = new Human_1.Human("Dani", "King");
h1.Show();
var sw1 = new SimpleWorker_1.SimpleWorker("Roni", "Loni", "Tel-Aviv", 10000);
sw1.Show();
var cm1 = new CompanyManager_1.CompanyManager("Gidi", "Didi", "Rishon", 12000, 2000, 5);
cm1.Show();
var cio = new CIO_1.CIO("Big", "BOSS", "Ramt-Gan", 1000000, 100000, 20, 12);
cio.Show();
