import { Human } from "./Human";


export class SimpleWorker extends Human{

    private _address: string;
    private _salary: number;

    public constructor(f_name, l_name,address : string, salary : number){
        super(f_name,l_name);
        this._address = address;
        this._salary = salary;
    }

    public Show(){
        super.Show();
        console.log("Address: " + this._address);
        console.log("Salary: " + this._salary);
    }
}