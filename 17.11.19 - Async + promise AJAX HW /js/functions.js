/// <reference path="jquery-3.4.1.js" />

$(() => {

    $("#primes").click(() => {
        findPrimes();
    });


});


function findPrimes(){

    try{
        const min = +prompt("Please enter min number:");
        const max = +prompt("Please enter max number:");
        const primes = getPrimes(min,max);
        console.log(primes);
    }
    catch(err){
        alert(err.message);
    }

}

function getPrimes(min,max){

    if(min > max){
        throw new Error("Minimum must be lower then Maximum");
    }

    const primes = [];

    let i;
    for(i = min ; i <= max; i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(n){

    let i;

    n = Math.abs(n);

    const sqrt = Math.sqrt(n);

    if(n === 1){
        return false;
    }

    for(i = 2; i<= sqrt; i++){
        if(n % i === 0){
            return false;
        }
    }



    return true;

}
