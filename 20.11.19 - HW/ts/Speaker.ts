export class Speaker{

    private _color : string;
    private _volume: number;
    private _status: string;

    public constructor(color : string, volume: number){

        this._color = color;
        this._volume = volume;
        this._status = "Off";

    }

    public turnOn() : void{

        if(this._status === "On"){
            throw new Error("Speaker is already On");
        }else{
            this._status="On";
            console.log("Speaker is On!");
        }

    }

    public turnOff() : void{

        if(this._status === "Off"){
            throw new Error("Speaker is already Off");
        }else{
            this._status="Off";
            console.log("Speaker is Off!");
        }

    }

    public makeVoice(text: string) : void{
        console.log(text);
    }

    public showDetails() : void{
        console.log("Color: " + this._color);
        console.log("Current volume: " + this._volume);
        console.log("Status" + this._status);
    }

}