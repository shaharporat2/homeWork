import { ElectricItem } from "./ElectricItem";

export class Toaster extends ElectricItem {

    private _MaxHeat: number;
    public constructor(vendor : string, size: number) {
        super(vendor);
        this._MaxHeat = size;
    }

    public display(){
        super.display();
        console.log("size: " + this._MaxHeat);
    }
}