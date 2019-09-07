export const useStockValueApi = (stockName) => {
    console.log(stockName);
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=U3NC7OY1RG617V1P`).then(response =>
        response.json().then(data => {
            console.log(data["Time Series (Daily)"]);
        })
    );
}