/// <reference path="jquery-3.4.1.js" />


/*

example from lesson:

example 1:

if we want to display all item in array we use - "of"

if we want to display all props in object we use - "in"

example:

for(const item of array){
    for(const prop in item){
        console.log(item[prop]);
    }
}


Uses of JQuery
$(<Selector>) - search for css selector (class(.) , id(#) , <buttom> - html tag)
$(<Object>) - search for object 
$(function) - function will be executed on load 

let is not doing hoisting an is known only in the code block (Block scope variable)

Immediately Invoked Function Expression IIFE



*/

(function (){ //start IIFE
    var x = 123;
    function f(){
        console.log("f...");
    }
    f();
})() //End IIFE

$(function(){

    //Work because js is doing hiosting 
    console.log(a);
    var a = "111";
    console.log(a);
})


//Using JavaScript 
const buttonHello = document.getElementById("buttonHello");
buttonHello.addEventListener("click",showHello);

function showHello(){
    alert("Hello");
}

//Using JQuery
$("#buttonWhatsUp").click(function() {
    var dt = new Date();
    alert(dt.toString());

    $(this).css("background-color","red")
})

$("button").mouseover( function(){
    if(this.id.includes("btn")){
        $(this).css("background-color","blue");
    }
})

$("button").mouseout( function(){
    if(this.id.includes("btn")){
        $(this).css("background-color","green");
    }
})