export abstract class Shape {

    private _xPos: number;
    private _yPos: number;
    private _color: string;

    public constructor(xPos: number, yPos: number, color: string) {
        this._xPos = xPos;
        this._yPos = yPos;
        this._color = color;
    }

    public dispay () : void{
        console.log("xPos: " + this._xPos);
        console.log("yPos: " + this._yPos);
        console.log("color: " + this._color);
    }

    public abstract getArea() : number;
}