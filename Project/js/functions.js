/// <reference path="jquery-3.4.1.js" />

$(() => {
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
            display(response)
        }
    })

    $(document).on("click", ".infoBtn", getInfo)

});



function display(coins) {

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
    //$(document).on("click",".custom-control-input",appendToReport);

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
