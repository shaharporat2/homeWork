import { CompanyManager } from "./CompanyManager";

export class CIO extends CompanyManager{
    private _stockPct: number;

    public constructor(f_name, l_name,address : string, salary : number, bonous: number, seniority : number, stockPct: number){
        super(f_name, l_name, address, salary,seniority,bonous);
        this._stockPct = stockPct;
    }

    public Show(){
        super.Show();
        console.log("Stocks PCT: " + this._stockPct);
    }
}