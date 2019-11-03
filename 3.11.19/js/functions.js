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

"use strict" - Set JavaScript -  find all kinds of Bugs in javaScript 


Inline function           Arrow function

function () { .... } --- () => {....}

function (a) { .... } --- a => {....}

function (a,b,c) { .... } --- (a,b,c) => { .... }

function () { One command } --- () => One command

function () { return value} --- () => value

This in arrow function  is the object outside the function






*/

"use strict";




(function (){ //start IIFE

})() //End IIFE

$(function(){


    

    //Work because js is doing hiosting 
    console.log(a);
    var a = "111";
    console.log(a);

    const buttonHello = document.getElementById("btn4");
    buttonHello.addEventListener("click", () => {
    //const num = parseInt(prompt("Please enter number"));
    //const num = parseFloat(prompt("Please enter number"));
    //const num = Number(prompt("Please enter number"));
    const num = +(prompt("Please enter number"));
    alert(Math.pow(num, 2));
    });



 
})

const btn5 = document.getElementById("btn5");

btn5.addEventListener("click", () => alert("btn5"));





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