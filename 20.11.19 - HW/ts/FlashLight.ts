export class FlashLight{
    private _color: string;
    private _length: number;
    private _volume: number;
    private _num_of_battaries: number;
    private _status: string;


    public constructor(color: string, length: number, volume: number, num_og_battaries: number){
        this._color = color;
        this._length = length;
        this._volume = volume;
        this._num_of_battaries = num_og_battaries;
        this._status = "Off";
    }

    public turnOn() : void{

        if(this._status === "On"){
            throw new Error("FlashLight is already On");
        }else{
            this._status="On";
            console.log("FlashLight is On!");
        }

    }

    public turnOff() : void{

        if(this._status === "Off"){
            throw new Error("FlashLight is already Off");
        }else{
            this._status="Off";
            console.log("FlashLight is Off!");
        }

    }

    public changeBattaries() : void{
        console.log("Changing battaries");
    }


    public showDetails() : void{
        console.log("Color: " + this._color);
        console.log("Length: " + this._length);
        console.log("Current volume: " + this._volume);
        console.log("Number of battaries: " + this._num_of_battaries);
        console.log("Status" + this._status);
    }
}
