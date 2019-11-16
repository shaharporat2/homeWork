/// <reference path="jquery-3.4.1.js" />

$(() => {
    $("#randomPassword").click(() => {
        displayString("randomPasswordDiv",generateRandomPassword(6));
    });

    $("#randomPasswordAsync").click(() => {
        setTimeout(function(){
            displayString("randomPasswordAsyncDiv",generateRandomPassword(6));
        }, 2000);
    });

    $("#randomNumber").click(() => {
        displayString("randomNumberDiv",generateRandomNumber(100,200));
    });

    $("#randomNumberAsync").click(() => {
        setTimeout(function(){
            displayString("randomNumberAsyncDiv",generateRandomNumber(100,200));
        }, 2000);
    });

    $("#generateObject").click(() => {
        displayInDivString("object1",returnTask(1,1,"delectus aut autem",false));
    });
});


//This function generats 'n' character random passwrod
function generateRandomPassword(n){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-<>?";
    var string_length = n;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    console.log(randomstring);
    return randomstring;
}

function generateRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

//Display $string in an element with $id
function displayString(id,string){
    const elem = `
        <span>
            ${string}
        </span>    `
    $("#"+id).append(elem);
}

function displayInDivString(id,string){
    const elem = `
        <div>
            userid : ${string.userId}
            <br>
            id: ${string.id}
            <br>
            title: ${string.title}
            <br>
            completed: ${string.completed}
            <br>
        </div>    `
    $("#"+id).append(elem);
}


function returnTask(userId, id, title, completed){
    let obj= {
        "userId" :  userId,
        "id" : id,
        "title" : title,
        "completed" : completed
    }
    return obj;
}