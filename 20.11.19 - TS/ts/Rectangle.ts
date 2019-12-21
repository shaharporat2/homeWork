import { Shape } from "./Shape";

export class Rectangle extends Shape{

    private _width: number;
    private _height: number;

    constructor(xPos : number, yPos: number,color: string,  width: number, height: number) {
        super(xPos,yPos,color);
        this._height= height;
        this._width= width;
    }

    public dispay(){
        super.dispay();
        console.log("width: " + this._width);
        console.log("height: " + this._height);
    }

    public  getArea() : number{
        return (this._width * this._height) / 2;
    }
}