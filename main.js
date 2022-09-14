var initialPrice = document.querySelector("#initial-price");
var NoOfStock = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var clickButton = document.querySelector(".btn-check");
var outputHere = document.querySelector(".output")

clickButton.addEventListener("click", typeCasting)

function typeCasting() {
    var itl = Number(initialPrice.value);
    var qty = Number(NoOfStock.value);
    var crt = Number(currentPrice.value);
    calculate(itl, qty, crt);
}

function calculate(initial, stocks, current) {
    if (initial > current) {
        var loss = (initial - current) * stocks;
        var losspercentage = (loss / initial) * 100;
        showMessage(`Hey, Your loss is ${loss} and loss percentage is ${losspercentage}%`);

    } else if (initial < current) {
        var profit = (current - initial) * stocks;
        var profitPercent = (profit / initial) * 100;
        showMessage(`Hey, your profit is ${profit} and profit percentage is ${profitPercent}%`);
    } else {
        showMessage("Please enter your stocks and price");
    }
}

function showMessage(message) {
    outputHere.innerText = message;
}