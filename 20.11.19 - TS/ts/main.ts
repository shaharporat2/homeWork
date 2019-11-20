import { Rectangle } from "./Rectangle"
import { Circle } from "./Circle"


let r = new Rectangle(1,1,"red",12,13);

let c = new Circle(2,2,"Blue",5);


r.dispay();
console.log("Rectangle Area: " + r.getArea());
c.dispay();
console.log("Circle Area: " + c.getArea());