import { Shape } from "./Shape";

export class Circle extends Shape{

    private _radius: number;

    constructor(xPos : number, yPos: number,color: string, radius: number) {
        super(xPos,yPos,color);
        this._radius= radius;
    }

    public dispay(){
        super.dispay();
        console.log("radius: " + this._radius);
    }

    public getArea() : number{
        return (this._radius) * Math.PI;
    }
}