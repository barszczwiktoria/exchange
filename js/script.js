{
    const welcome = () => {
        console.log("hello everyone in my second project - currency calclulator");
    }

    const calculateResult = (amount, exchange) => {
        const rateEUR = 4.39;
        const rateUSD = 4.69;
        const rateMKD = 0.076;
        const ratePLNEUR = 0.21;
        const ratePLNUSD = 0.23;
        const ratePLNMKD = 13.18;

        switch (exchange) {
            case "EUR-PLN":
               return amount * rateEUR;
            case "USD-PLN":
                return  amount * rateUSD;
            case "MKD-PLN":
                return  amount * rateMKD;
            case "PLN-EUR":
                return  amount * ratePLNEUR;
            case "PLN-USD":
                return  amount * ratePLNUSD;
            case "PLN-MKD":
                return  amount * ratePLNMKD;
        }
    };

    const updateResultText = (result, exchange) => {
        const resultElement = document.querySelector(".js-result");
    
        resultElement.innerText = (`${result.toFixed(2)} ${exchange.split('-')[1]}`);
    }      

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const exchangeElement = document.querySelector(".js-exchange");

        const amount = +amountElement.value;
        const exchange = exchangeElement.value;

        const result = calculateResult(amount, exchange);

        updateResultText(result, exchange);
    };
 
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
<<<<<<< HEAD

        welcome()
=======
>>>>>>> 0ec7897706d441e5a999d3254c3a3e102eae4d17
    };
    init();
    }
