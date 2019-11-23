import { SimpleWorker } from "./SimpleWorker";

export class CompanyManager extends SimpleWorker{

    private _seniority: number;
    private _bonous : number;

    public constructor(f_name, l_name,address : string, salary : number, bonous: number, seniority : number){
        super(f_name, l_name, address, salary);
        this._seniority = seniority;
        this._bonous = bonous;
    }

    public Show(){
        super.Show();
        console.log("Seniority: " + this._seniority);
        console.log("Bonous: " + this._bonous);
    }
}
