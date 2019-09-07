export const useStockValueApi = (stockName) => {
    console.log(stockName);
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=U3NC7OY1RG617V1P`).then(response =>
        response.json().then(data => {
            console.log(data["Time Series (Daily)"]);
        })
    );
}

export const getValues = async (stockName, date) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=U3NC7OY1RG617V1P`);
    const json = await response.json();

    if (!json.hasOwnProperty('Time Series (Daily)')) {
        return false;
    }

    const opening = json["Time Series (Daily)"][date]["1. open"];
    const closing = json["Time Series (Daily)"][date]["4. close"];

    console.log(stockName + " | OPEN | " + opening)
    console.log(stockName + " | CLOSE | " + closing)

    return [opening, closing];

}

export const stockExists = async (stockName) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=U3NC7OY1RG617V1P`);
    const json = await response.json();

    console.log(stockName + " does " + (json.hasOwnProperty("Time Series (Daily)") ? "" : "NOT ") + "exist!");
    return json.hasOwnProperty("Time Series (Daily)");
}