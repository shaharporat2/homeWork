export class Chair{

    private _matirial: string;
    private _color: string;
    private _lenght: number;
    private _width: number;
    private _height: number;
    private _capacity: number;

    public constructor(matirial: string, color: string, lenght: number, width: number, height: number){
        this._matirial = matirial;
        this._color = color;
        this._width = width;
        this._lenght = lenght;
        this._height = height;
        this._capacity = this._height * this._lenght * this._width;

    }

    public showDetails() : void{
        console.log("Color: " + this._color);
        console.log("Matirail: " + this._matirial);
        console.log("Length: " + this._lenght);
        console.log("Width: " + this._width);
        console.log("Height: " + this._height);
        console.log("Capacity: " + this._capacity);
    }
}
