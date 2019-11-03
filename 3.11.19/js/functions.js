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

*/


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
})