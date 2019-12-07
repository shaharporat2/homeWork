/// <reference path="jquery-3.4.1.js" />

$(() => {
    $.ajax({
        method: "GET",
        url: "https://api.coingecko.com/api/v3/coins/list",
        dataType:"json",
        beforeSend: function(){
            $("#loader").show();
        },
        complete: function(){
            $("#loader").hide();
        },
        error: err => alert("Error" + err.status),
        success: response => {
            display(response)
        }
    })

});


function display(coins){

    for(coin of coins){
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
                        <a href="#" class="btn btn-primary">Button</a>
                    </article>
                </div>
            </div>
            `
            $("#allCoins").append(card);
    }
}


