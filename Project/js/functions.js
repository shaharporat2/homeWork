/// <reference path="jquery-3.4.1.js" />

var localCoins;


$(() => {



    $("#home").click(() => {
        $("#allCoins").empty();
        clearInterval(chrtInterval);

        $.ajax({
            method: "GET",
            url: "https://api.coingecko.com/api/v3/coins/list",
            dataType: "json",
            beforeSend: function () {
                $("#loader").show();
            },
            complete: function () {
                $("#loader").hide();
            },
            error: err => alert("Error" + err.status),
            success: response => {
                localCoins = response;
                display(response)
            }
        })
    });

    $(document).on("click", ".infoBtn", getInfo);

    $(document).on("click", "#About", displayAbout);

    $(document).on("click", "#liveReport", displayLiveReport);

    $(document).on("click", "#searchCoins", searchCoins);


});

/**
 * 
 */
function searchCoins(){

    clearInterval(chrtInterval);

    
    var list = [];
    var displayCoins = []

    if(localCoins === undefined ){
        alert("No coins in the memory, please load coins using home button first");
    }else{

        
        var value = $("#searchCoinsInput").val() ;

        if (value === ""){
            tmepCoins = JSON.parse(localStorage.getItem("reportList"));
            for(name of tmepCoins){
                displayCoins.push(name);
            }
        }else{
            displayCoins.push(value)
        }
        for (coin of localCoins){
            if(displayCoins.includes(coin.id) === true || displayCoins.includes(coin.symbol) === true || displayCoins.includes(coin.name) === true){
                list.push(coin);
            }
        }

        display(list)
    }
}

/**
 * 
 * @param {*} coins 
 */

function display(coins) {
    $("#allCoins").empty();
    for (coin of coins) {
        const card = `
            <div class="col-xl-4 p-0">
                <div class="card">
                    <article class="card-body" id="${coin.id}">
                        <div class="custom-control custom-switch float-right">
                            <input type="checkbox" class="custom-control-input" id="${coin.symbol}">
                            <label class="custom-control-label" for="${coin.symbol}" data-size="lg"></label>
                        </div>
                        <h5 class="card-text pb-3">${coin.symbol}</h5>
                        <h6 class="card-subtitle text-muted pb-3">${coin.name}</h6>
                        <p>
                            <a data-toggle="collapse" href="#collapse${coin.id}" role="button" aria-expanded="false" aria-controls="collaps${coin.id}" class="btn btn-primary infoBtn ${coin.id}">More Info</a>
                        </p>
                        <div class="collapse" id="collapse${coin.id}">
                            <div class="card card-body infoBody${coin.id}">
                                <div id="loader${coin.id}">
                                    <img src="./img/ajax-loader.gif" class="img-responsive"/>
                                </div>
                               
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            `
        $("#allCoins").append(card);
    }
    $(".custom-control-input").change(appendToReport);

    let item
    let list = JSON.parse(localStorage.getItem("reportList"));
    if (list != null) {
        for (item of list) {
            $("#" + item).prop('checked', true)
        }
    }
}

/**
 * 
 * 
 */
function getInfo() {
    id = (($(this).attr("class")).split(" "))[3];
    coinObj = JSON.parse(localStorage.getItem(id));

    if(coinObj != null){
        var update  = parseInt(coinObj.time) + parseInt(120000) - Date.now();
    }

    if ((coinObj === null) || (update < 0 )) {
        $.ajax({
            method: "GET",
            url: "https://api.coingecko.com/api/v3/coins/" + id,
            dataType: "json",
            beforeSend: function () {
                $("-" + id).show();
            },
            complete: function () {
                $("#loader-" + id).hide();
            },
            error: err => alert("Error" + err.status),
            success: response => {
                addToLocalStorage(response);
                addInfo(id);
            }
        })
    } else {
        addInfo(id);
    }
}


/**
 * 
 * @param {*} info 
 */
function addToLocalStorage(info) {


    data = {
        "usd": info.market_data.current_price.usd,
        "eur": info.market_data.current_price.eur,
        "ils": info.market_data.current_price.ils,
        "symbol": info.image.large,
        "time": Date.now()
    }
    localStorage.removeItem(info.id);
    localStorage.setItem(info.id, JSON.stringify(data));
}

/**
 * 
 * @param {*} id 
 */
function addInfo(id) {

    info = JSON.parse(localStorage.getItem(id));

    const infoCard = `
        Value in USD: ${info.usd}&#36;
        <br>
        Value in EUR: ${info.eur}&#8364;
        <br>
        Value in ILS: ${info.ils}&#8362
        <br>
        <img  src="${info.symbol}"/>
    `
    $(".infoBody" + id).empty();
    $(".infoBody" + id).append(infoCard);
}

/**
 * 
 * 
 */
function appendToReport() {

    if (localStorage.getItem("reportList") === null) {
        reportList = [];
        localStorage.setItem("reportList", JSON.stringify(reportList))
    }

    list = JSON.parse(localStorage.getItem("reportList"));

    id = $(this).attr("id");

    index = list.indexOf(id);
    if (index > -1) {
        list.splice(index, 1)
    } else {
        if (list.length <= 4) {
            list.push(id);
        } else {
            viewModal();
        }
    }
    localStorage.setItem("reportList", JSON.stringify(list));
}


/**
 * 
 * 
 */
function viewModal() {

    list = JSON.parse(localStorage.getItem("reportList"));



    const modal = `
    <div class="modal" tabindex="-1" role="dialog" id="modal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Web Alart</h5>
            </div>
            <div class="modal-body">
                <p>You can pick only 5 coins to report list - your current list is: </p>
                <div id="listGroup">

                </div>
                Pick the one you want yo replace or close the modal
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary"  onclick="saveChanges()">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

    `

    $("#allCoins").append(modal);
    $("#listGroup").empty();

    for (item of list) {
        const coin = `
        <div class="form-check">
            <input class="form-check-input modalOptions" type="radio" name="CoinOptions" id="Radio_${item}" value="${item}">
            <label class="form-check-label" for="Radio_${item}"> ${item} </label>
        </div>    
        `
        $("#listGroup").append(coin);
    }
    $("#modal").modal('show');
    id = $(this).attr("id");
    $("#" + id).prop('checked', false);
    localStorage.setItem("tempCoin", id);
}

/**
 * 
 * 
 */

function saveChanges() {
    radioList = $(".modalOptions");
    for (item of radioList) {
        if (item.checked == true) {
            index = list.indexOf(item.value);
            if (index > -1) {
                list.splice(index, 1);
                $("#" + item.value).prop('checked', false);
                list.push(localStorage.getItem("tempCoin"));
                $("#" + localStorage.getItem("tempCoin")).prop('checked', true);
            } else {

            }
            localStorage.setItem("reportList", JSON.stringify(list));
            localStorage.removeItem("tempCoin");
        }
    }
    $("#modal").modal('hide');

}

function displayAbout() {
    $("#allCoins").empty();
    clearInterval(chrtInterval);

    const about = `
    
    <div class="col-xl-12" id="AboutPage"  style="height: 300px; width: 100%;">
        <h1> Name: Shahar Porat </h1>
        <br>
        <h2> Best cryptocurrency website ever </h3>
        <img class="img-thumbnail" src="./img/The-Top-3-Cryptocurrencies-What-Makes-Them-a-Success.jpg"/>
    </div>    
    `
  

    $("#allCoins").append(about);

}

var chart;
var time = new Date;
var updateInterval = 2000;
var chrtInterval;

var yValue1 = 0;
var yValue2 = 0;
var yValue3 = 0;

    
/**
 * 
 * 
 */

function displayLiveReport() {

    var options;
    var coins = [];
    var dataPoints1 = [];
    var dataPoints2 = [];
    var dataPoints3 = [];
    var dataPoints4 = [];
    var dataPoints5 = [];
    var dataPoints =[];
    dataPoints.push(dataPoints1);
    dataPoints.push(dataPoints2);
    dataPoints.push(dataPoints3);
    dataPoints.push(dataPoints4);
    dataPoints.push(dataPoints5);

    url =""

    let list = JSON.parse(localStorage.getItem("reportList"));

    for (coin of list){
        url = url + coin + ",";
    }

    url = url.substring(0, url.length - 1);

    url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + url + "&tsyms=USD";

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
        var i=1;
        for(coin in data){
            var el = {
                type: "line",
                xValueType: "dateTime",
                xValueFormatString: "hh:mm:ss TT",
                showInLegend: true,
                name: coin,
                dataPoints: dataPoints[i]
            }
            coins.push(el); 
            i++;
        }
         
        options = {
            title: {
                text: "Coin Chart"
            },
            axisX: {
                title: "chart updates every 2 secs"
            },
            axisY: {
                includeZero: false
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                verticalAlign: "top",
                fontSize: 22,
                fontColor: "dimGrey",
                itemclick: toggleDataSeries
            },
            data:[

            ]
        };        
        options.data = coins;
    
        const chartArea = `
        <div class="col-xl-12" id="chartContainer"  style="height: 300px; width: 100%;">
        
        </div>    
        ` 
    
        $("#allCoins").empty();
        $("#allCoins").append(chartArea);
        chart = $("#chartContainer").CanvasJSChart(options);
        updateChart(100);
        chrtInterval = setInterval(function () { updateChart() }, updateInterval);
    })
    .catch(err => alert(err.message))


/**
 * 
 * @param {*} e 
 */

function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    }
    else {
        e.dataSeries.visible = true;
    }
    e.chart.render();
}


/**
 * 
 * @param {*} count 
 */
function updateChart(count) {
    count = count || 1;

    
    
    for (var i = 0; i < count; i++) {
        time.setTime(time.getTime() + updateInterval);
        fetch(url)
        .then((resp) => resp.json())
        .then(function(data){
            var i=1;
            for(coin in data){
                dataPoints[i].push({
                    x: time.getTime(),
                    y: data[coin].USD
                });
                i++;
            }
        })
    }

    $("#chartContainer").CanvasJSChart().render();
}
}







