/// <reference path="jquery-3.4.1.js" />


//
$( function(){
   let cell1 = createCellphone("A","B","C","D","E");
    displayCellphone(cell1)

    let car1 = createCar("Toyota",2000,"Black");
    let car2 = createCar("mitsubishi",2001,"Blue");
    let car3 = createCar("Renault",2002,"white");
    let carArray = new Array(car1,car2,car3);
    displayCars(carArray);
    let colthe1 = createClothe("pajamas",'M',200,"Purpple");
    let colthe2 = createClothe("Dress",'S',50,"Red");
    let colthe3 = createClothe("BodySuites",'XXL',349,"Blue");
    let colthe4 = createClothe("Pens",'L',100,"Black");
    let colthe5 = createClothe("Tops",'XS',12,"Green");
    let colthes = new Array(colthe1,colthe2,colthe3,colthe4,colthe5);
    console.log(calcAvg(colthes));
    displayRandom();
    cool(changeBackground);
    //nice("Green",changeBackground);
    displayNameCallback("Noa",displayName);
    getLocation();
})

//
function createCellphone(model, vendorName, price, screenSize, os){
    let cellphone = {
        model: model,
        vendorName: vendorName,
        price: price,
        screenSize: screenSize,
        os: os
    }

    return cellphone;
}

//
function displayCellphone(cellphone){

    $.each(cellphone , function(i,val){
        console.log(val);
    });
}

//
function createCar(model, year, color){
    let car = {
        model: model,
        year: year,
        color: color
    }
    return car;
}

//
function displayCars(cars){
    $.each(cars, function(i,val){
        displayCar(val);
    });
}

//
function displayCar(car){
    $.each(car, function(i,val){
        console.log(val);
    });
}

//
function createClothe(type, size, price, color){
    let colthe = {
        type: type,
        size: size,
        price: price,
        color: color
    }
    return colthe;
}

//
function calcAvg(colthes){
    let sum = 0;
    $.each(colthes , function(index,val){
        sum+=val.price;
    });
    return (sum / colthes.length)
}

//
function displayRandom(){
    setInterval(function(){
        $("#random").each(function(){
            let i =  Math.floor(Math.random() * 100) + 1;
            $(this).text(i);
       })
    }, 1000) 
}

function changeBackground(color){

    if(color == null){
        setInterval(function(){
            document.body.bgColor=getRandomColor();
        }, 1000)
    }else{
        document.body.bgColor="Green";
    }
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  function displayName(name){
      return ($("#Name").html(name));
  }

  function displayNameCallback(name, callback){
    callback(name);
  }

  function cool(paintCallback) {
	paintCallback();
}

function nice(color,paintCallback) {
	paintCallback(color);
}

//
function getLocation(){
    x = document.getElementById("geo");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,errorCallback);
  } else {
    ("#geo").html("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
    $("#geo").html("Latitude: " + position.coords.latitude + "</br>" + "Longitude:"  + position.coords.longitude);
}

function errorCallback(){
    $("#geo").html("are you sure?");
}