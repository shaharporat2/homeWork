export abstract class ElectricItem {

    private _vendor : string;

    public constructor(vendor : string) {
        this._vendor = vendor;
    }

    public display(){
        console.log("Vendor: " + this._vendor);
    }
}
