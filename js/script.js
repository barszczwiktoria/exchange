let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let exchangeElement = document.querySelector(".js-exchange");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.39;
let rateUSD = 4.69;
let rateMKD = 0.076;
let ratePLNEUR = 0.21;
let ratePLNUSD = 0.23;
let ratePLNMKD = 13.18;

formElement.addEventListener("reset", () => {
    resultElement.innerText = "";
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let exchange = exchangeElement.value;
    let result = resultElement.value;
    

    switch (exchange) {
        case "EUR-PLN":
            result = amount * rateEUR
            break;

        case "USD-PLN":
            result = amount * rateUSD
            break;

        case "MKD-PLN":
            result = amount * rateMKD
            break;

        case "PLN-EUR":
            result = amount * ratePLNEUR
            break;

        case "PLN-USD":
            result = amount * ratePLNUSD
            break;

        case "PLN-MKD":
            result = amount * ratePLNMKD
            break;
    }

    resultElement.innerText = (` ${result.toFixed(2)} ${exchange.split('-')[1]}`);
})
















