import { Product } from "./Product";

export class ElectronicProduct extends Product{
    private _manufacturer: string;
    private _model: string;

    public constructor(name: string, price: number, manufacturer: string, model: string ){
        super(name,price);
        this._manufacturer = manufacturer;
        this._model = model;
    }

    public display() : void{
        super.display();
        console.log("manufacturer: " + this._manufacturer);
        console.log("model: " + this._model);
    }
}