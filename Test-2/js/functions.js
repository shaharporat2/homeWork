/// <reference path="jquery-3.4.1.js" />

$(() => {
    $("#all").click(() => {
        $.ajax({
            method: "GET",
            url: "https://restcountries.eu/rest/v2/all",
            beforeSend: function(){
                $("#loader").show();
            },
            complete: function(){
                $("#loader").hide();
            },
            error: err => alert("No Countries was found"),
            success: response => {
                displayAll(response)
            }
        })
    });

    $("#searchCountry").click(() => {
        search = $("#searchCountryInput").val();
        $.ajax({
            method: "GET",
            url: "https://restcountries.eu/rest/v2/name/" + search,
            error: err => alert("Error" + err.status),
            success: response => {
                displayAll(response)
            }
        })
    });
});




function displayAll(allCountries){

    allCurr=`
    <h7>Currencies:<h7>
    `

    $("#allCountries").empty();
    for(country of allCountries){
        console.log(country)

        if(country.flag==""){
            const flag=`
            <div class="col-xl-6 col-md-6 col-sm-6">
                <img src="./img/placeholder.png" class="img-thumbnail" id="flag"/>
            </div>
            `      
            $("#allCountries").append(flag);      
        }else{
            const flag=`
            <div class="col-xl-6 col-md-6 col-sm-6">
                <img src="${country.flag}" class="img-thumbnail" id="flag"/>
            </div>
            `
            $("#allCountries").append(flag);
        }
        

        const card = `
        <div class="col-xl-6 col-md-6 col-sm-6">
            <h4>Name: ${country.name} </h4>
            <br>
            <h5>Top Lebel domain: ${country.topLevelDomain} </h5>
            <br>
            <h6>Capital: ${country.capital} </h6>
            <br>
        `

        for(currency of country.currencies){
            const curr= `
            <h7> "code: " ${currency.code} , </h7>
            <br>
            <h7> "name: " ${currency.name} </h7>
            <br>
            <h7> "symbol:" ${currency.symbol} </h7>
            `
            allCurr = allCurr + curr;
        }

        allCurr = allCurr + "<div>"

        $("#allCountries").append(card + allCurr);
    }
}