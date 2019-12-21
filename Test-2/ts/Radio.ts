import { ElectricItem } from "./ElectricItem";

export class Radio extends ElectricItem {

    private _num_of_stations : number;

    public constructor(vendor: string, num_of_statios: number){
        super(vendor);
        this._num_of_stations = num_of_statios;
    }

    display(){
        super.display();
        console.log("Number of stations: " + this._num_of_stations)
    }
}