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


function searchCoins(){

    if(localCoins === undefined ){
        alert("No coins in the memory, please load coins using home button first");
    }else{
        var list = [];
    
        var value = $("#searchCoinsInput").val() ;
        for (coin of localCoins){
            if(value.localeCompare(coin.id) === 0 || value.localeCompare(coin.symbol) === 0 || value.localeCompare(coin.name) === 0){
                list.push(coin);
            }
        }
        display(list)
    }
}


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

function getInfo() {
    id = (($(this).attr("class")).split(" "))[3];
    coinObj = localStorage.getItem(id);

    if ((coinObj === null) || (parseInt(coinObj.time) + parseInt(120000) < Date.now())) {
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

function addToLocalStorage(info) {


    data = {
        "usd": info.market_data.current_price.usd,
        "eur": info.market_data.current_price.eur,
        "ils": info.market_data.current_price.ils,
        "symbol": info.image.thumb,
        "time": Date.now()
    }
    localStorage.removeItem(info.id);
    localStorage.setItem(info.id, JSON.stringify(data));
}


function addInfo(id) {

    info = JSON.parse(localStorage.getItem(id));

    const infoCard = `
        Value in USD: ${info.usd}&#36;
        <br>
        Value in EUR: ${info.eur}&#8364;
        <br>
        Value in ILS: ${info.ils}&#8362
        <br>
        <img class="img-thumbnail" src="${info.symbol}"/>
    `
    $(".infoBody" + id).empty();
    $(".infoBody" + id).append(infoCard);
}


function appendToReport() {

    if (localStorage.getItem("reportList") === null) {
        reportList = [];
        localStorage.setItem("reportList", JSON.stringify(reportList))
    }

    list = JSON.parse(localStorage.getItem("reportList"));

    id = $(this).attr("id");
    console.log(id);

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

function saveChanges() {
    radioList = $(".modalOptions");
    for (item of radioList) {
        if (item.checked == true) {
            index = list.indexOf(item.value);
            console.log(item.value);
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
    
        <h1> shahar </h1>
    `

    $("#allCoins").append(about);

}

var chart;
var time = new Date;
var updateInterval = 2000;
var chrtInterval;

var yValue1 = 800;
var yValue2 = 810;
var yValue3 = 780;

    


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
        var options = {
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



    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }

    function updateChart(count) {
        count = count || 1;

        
        //var deltaY1, deltaY2, deltaY3;
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
            // deltaY1 = -1 + Math.random() * (1 + 1);
            // deltaY2 = -1 + Math.random() * (1 + 1);
            // deltaY3 = -1 + Math.random() * (1 + 1);
    
            // // adding random value and rounding it to two digits. 
            // yValue1 = Math.round((yValue1 + deltaY1) * 100) / 100;
            // yValue2 = Math.round((yValue2 + deltaY2) * 100) / 100;
            // yValue3 = Math.round((yValue3 + deltaY3) * 100) / 100;
    
            // // pushing the new values
            // dataPoints[1].push({
            //     x: time.getTime(),
            //     y: yValue1
            // });
            // dataPoints[2].push({
            //     x: time.getTime(),
            //     y: yValue2
            // });
            // dataPoints[3].push({
            //     x: time.getTime(),
            //     y: yValue3
            // });
        }
    
        // updating legend text with  updated with y Value 
        //options.data[0].legendText = "Turbine 1 : " + yValue1 + "Wh";
        //options.data[1].legendText = "Turbine 2 : " + yValue2 + "Wh";
        //options.data[2].legendText = "Turbine 3 : " + yValue3 + "Wh";
        $("#chartContainer").CanvasJSChart().render();
    }
}







