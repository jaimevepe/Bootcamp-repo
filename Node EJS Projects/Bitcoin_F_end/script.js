let btn = document.getElementById('Btn');

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

btn.addEventListener("click", ()=>{
    let currency = document.querySelector('input[name="currency"]').value;
    fetch(url)
    .then(response =>{
        if(!response.ok){
            throw Error;
        }
        return response.json();
    })
    .then(data =>{
        let rate = data.bpi[currency].rate_float.toFixed(2); // TODO: sets value 2 decimals places
        let symbol = data.bpi[curency].symbol;
       document.getElementById('price').innerHTML = symbol + rate;
    })
    .catch(error =>{
        console.log("Error from network");
        
    })
})