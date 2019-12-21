function randArry(arr:number[]) : void {
    for(let i=0;i<arr.length;i++){
        arr[i]=Math.floor(Math.random()*10);     
    }
}


abstract class Animal{
    public name: string;


    public constructor(name: string){
        this.name = name;
    }

    public display(){
        console.log("Name: " + this.name);
    }
}


class Cat extends Animal{
    public age: number;

    public constructor(name: string, age: number){
        super(name);
        this.age = age;
    }

    public display(){
        super.display();
        console.log("Age: " + this.age);
    }
    
}

class Dog extends Animal{
    public color: string;


    public constructor(name: string, color: string){
        super(name);
        this.color = color;
    }

    public display(){
        super.display();
        console.log("Color: " + this.color);
    }
}

let obj : Animal;

let c = new Cat("Mitsi",4);
let d = new Dog("Prince","Brown");


//let animals = new Array<Animal>();
let animals : Animal[] = [];
animals.push(c);
animals.push(d);


function createAnimal(ani : Animal){
    if(Math.random() < 0.5){
        obj = new Cat("Mitsi",5);
    }else{
        obj = new Dog("Prince","Red");
    }
}

function createReport(obj: Animal) {
    obj.display();
}




// if( obj instanceof Cat ){
//     console.log("The age of the cat is: " + (obj as Cat).age)
// }else{
//     console.log("The color of the dog is: " + (obj as Dog).color)
// }


createReport(c);
createReport(d);