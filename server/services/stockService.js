const axios = require("axios");

const BASE_URL = "https://finnhub.io/api/v1";

const apiKey = process.env.FINNHUB_API_KEY;

// Search Stocks
const searchStocks = async (query) => {

    const response = await axios.get(
        `${BASE_URL}/search?q=${query}&token=${apiKey}`
    );

    return response.data;
};

// Get Stock Quote
const getQuote = async (symbol) => {

    const response = await axios.get(
        `${BASE_URL}/quote?symbol=${symbol}&token=${apiKey}`
    );

    return response.data;
};

// Company Profile
const getCompanyProfile = async (symbol) => {

    const response = await axios.get(
        `${BASE_URL}/stock/profile2?symbol=${symbol}&token=${apiKey}`
    );

    return response.data;
};

module.exports = {

    searchStocks,
    getQuote,
    getCompanyProfile

};