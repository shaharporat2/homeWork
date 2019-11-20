import { Shape } from "./Shape";

export class Circle extends Shape{

    private _radius: number;

    constructor(xPos : number, yPos: number,color: string, radius: number) {
        super(xPos,yPos,color);
        this._radius= radius;
    }

    dispay(){
        super.dispay();
        console.log("radius: " + this._radius);
    }

    getArea() : number{
        return (this._radius) * Math.PI;
    }
}