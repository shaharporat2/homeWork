export abstract class Product{
    private _name: string;
    private _price: number;


    public constructor(name: string, price: number){
        this._name = name;
        this._price = price;
    }


    public display() : void {
        console.log("name: " + this._name );
        console.log("price: " +  this._price);
    }
}