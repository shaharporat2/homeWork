import { Speaker } from "./Speaker"
import { FlashLight } from "./FlashLight";
import { Chair } from "./Chair";
import { Human } from "./Human";
import { SimpleWorker } from "./SimpleWorker";
import { CompanyManager } from "./CompanyManager";
import { CIO } from "./CIO";








let s1 = new Speaker("Red",9);
let s2 = new Speaker("Blue",7);

s1.showDetails();
s1.turnOn();
s1.makeVoice("My name is XXX");
s1.turnOff();

try{
    s1.turnOff();
}catch(err){
    console.log(err.message);
}



let f1 = new FlashLight("Green",4,3,4);
f1.showDetails();
f1.changeBattaries();
f1.turnOn();
f1.turnOff();

let c1 = new Chair("Wood","Brown",3,3,3);
c1.showDetails();

let h1 = new Human("Dani","King");
h1.Show();

let sw1 = new SimpleWorker("Roni","Loni","Tel-Aviv",10000);
sw1.Show();

let cm1 = new CompanyManager("Gidi","Didi","Rishon",12000,2000,5);
cm1.Show();

let cio = new CIO("Big","BOSS","Ramt-Gan",1000000,100000,20,12);
cio.Show();