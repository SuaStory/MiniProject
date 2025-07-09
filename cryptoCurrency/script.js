let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogeCoin");

let settings = {
    "async":true,
    "scrossDomain":true,
    "url":"https://",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    console.log(response);
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});