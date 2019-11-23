export class Human{
    private _f_name: string;
    private _l_name: string;

    public constructor(f_name: string, l_name: string){
        this._f_name = f_name;
        this._l_name = l_name;
    }

    public Show(){
        console.log("First name: " + this._f_name);
        console.log("Last name: " + this._l_name);
    }
}