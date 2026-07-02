const {

    searchStocks,
    getQuote,
    getCompanyProfile

} = require("../services/stockService");

// Search Stocks
const getAllStocks = async (req, res) => {

    try {

        const query = req.query.search;

        if (!query) {

            return res.status(400).json({
                success: false,
                message: "Search query is required."
            });

        }

        const stocks = await searchStocks(query);

        res.status(200).json({

            success: true,
            stocks

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Stock Details
const getSingleStock = async (req, res) => {

    try {

        const symbol = req.params.symbol;

        const quote = await getQuote(symbol);

        const profile = await getCompanyProfile(symbol);

        res.status(200).json({

            success: true,
            quote,
            profile

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    getAllStocks,
    getSingleStock

};