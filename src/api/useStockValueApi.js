// Constants
const TIME_SERIES_DAILY = "Time Series (Daily)";
const TIME_SERIES_HOURLY = "Time Series (60min)";
const OPEN_KEY = "1. open";
const CLOSE_KEY = "4. close";
// const API_KEY = "U3NC7OY1RG617V1P"; // david's key
const API_KEY_2 = "5IUL2YGS8MZ0VW5C" // michael's key

const createDailyApiUrl = (stockName, key) => {
    return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=${key}`;
}

const createHourlyApiUrl = (stockName, key) => {
    return `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockName}&apikey=${key}&interval=60min`;
}

// export const useStockValueApi = (stockName) => {
//     console.log(stockName);
//     return fetch(createApiUrl(TIME_SERIES_DAILY, stockName, API_KEY)).then(response =>
//         response.json().then(data => {
//             console.log(data["Time Series (Daily)"]);
//         })
//     );
// }

export const getDailyValues = async (stockName) => {
    const response = await fetch(createDailyApiUrl(stockName, API_KEY_2));
    const json = await response.json();

    if (!json.hasOwnProperty(TIME_SERIES_DAILY)) {
        return false;
    }

    const dailyValues = json[TIME_SERIES_DAILY];
    const latestDate = Object.keys(dailyValues)[0];

    // We're assuming the api is going to return the latest values first (what we care about)
    // Otherwise, we can reduce the keyset to find the 'highest' value
    // const latestDate = Object.keys(dailyValues).reduce(function(a, b){ return a > b ? a : b });

    const opening = dailyValues[latestDate][OPEN_KEY];
    const closing = dailyValues[latestDate][CLOSE_KEY];

    console.log(stockName + " | OPEN | " + opening)
    console.log(stockName + " | CLOSE | " + closing)

    return [latestDate, opening, closing];

}

export const getHourlyValues = async (stockName) => {
    const response = await fetch(createHourlyApiUrl(stockName, API_KEY_2));
    const json = await response.json();

    if (!json.hasOwnProperty(TIME_SERIES_HOURLY)) {
        return false;
    }

    const hourlyValues = json[TIME_SERIES_HOURLY];
    const endHour = Object.keys(hourlyValues)[0];
    const startHour = Object.keys(hourlyValues)[1];

    const startPrice = hourlyValues[startHour]["1. open"];
    const endPrice = hourlyValues[endHour]["1. open"];

    console.log(stockName + " | " + startHour + " | " + startPrice)
    console.log(stockName + " | " + endHour + " | " + endPrice)

    return [startHour, startPrice, endHour, endPrice];

}

export const stockExists = async (stockName) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=U3NC7OY1RG617V1P`);
    const json = await response.json();

    console.log(stockName + " does " + (json.hasOwnProperty("Time Series (Daily)") ? "" : "NOT ") + "exist!");
    return json.hasOwnProperty("Time Series (Daily)");
}
