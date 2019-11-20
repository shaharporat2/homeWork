import { ElectronicProduct } from "./ElectronicProduct";

export class Toaster extends ElectronicProduct{
    private _optimalHeat: number;

    public constructor(name: string, price: number, manufacturer: string, model: string, optimalHeat: number ){
        super(name,price,manufacturer,model);
        this._optimalHeat = optimalHeat;
    }

    public display() : void{
        super.display();
        console.log("optimal heat: " + this._optimalHeat);
    }
}