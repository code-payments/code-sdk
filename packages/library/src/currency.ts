//import { ErrInvalidCurrency } from "./errors";
const fs = require('fs');
const path = require('path');
const currencyCodes = require('currency-codes');

class ErrInvalidCurrency extends Error {
    constructor(message) {
        super(message);
        this.name = "ErrInvalidCurrency";
    }
}

// Manual Overrides and Unsupported Currency Configuration
const manualOverrides = {
    // Explicitly include support for cryptocurrency "KIN"
    "KIN": { code: "KIN", number: '000', name: 'Kin', countries: ['Cryptocurrency'] }
    // Add other cryptocurrencies or custom currencies here as needed
};

const unsupportedCurrencies = [
    // Example of an unsupported currency code
    "VEF"  // Venezuelan Bolívar (example)
];

const DATA_CUTOFF_DATE = new Date('2023-01-01');

const DATA_FILE_PATH = path.join(__dirname, 'currencyData.json');

function isBeforeCutoffDate() {
    const today = new Date();
    return today <= DATA_CUTOFF_DATE;
}

function saveCurrencyDataToFile(data) {
    fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error saving currency data to file:', err);
        } else {
            console.log('Currency data successfully saved to file.');
        }
    });
}

function getCurrencyData(currency) {
    currency = currency.toUpperCase();
    
    if (unsupportedCurrencies.includes(currency)) {
        throw new ErrInvalidCurrency(`Currency ${currency} is unsupported.`);
    }

    // Check manual overrides first, which includes cryptocurrencies
    if (currency in manualOverrides) {
        return manualOverrides[currency];
    }

    // For fiat currencies, check the external library and the cutoff date
    if (isBeforeCutoffDate()) {
        const data = currencyCodes.code(currency);
        if (data) {
            saveCurrencyDataToFile(currencyCodes.data()); // Note: Adjust according to actual library API
            return data;
        }
    }

    // If no data is available, attempt to read from a previously saved cache
    try {
        const fileData = fs.readFileSync(DATA_FILE_PATH, { encoding: 'utf8' });
        const cachedData = JSON.parse(fileData);
        const currencyData = cachedData.find(c => c.code === currency);
        if (currencyData) {
            return currencyData;
        }
    } catch (err) {
        console.error('Error reading from cache:', err);
    }

    throw new ErrInvalidCurrency(`Currency ${currency} is invalid or data is outdated.`);
}

function isValidCurrency(currency) {
    try {
        getCurrencyData(currency);
        return true;
    } catch (error) {
        return false;
    }
}

function currencyCodeToNumber(currency) {
    const data = getCurrencyData(currency);
    return data.number;
}

function numberToCurrencyCode(number) {
    const data = currencyCodes.number(number);
    if (!data) {
        throw new ErrInvalidCurrency(`Invalid numeric code: ${number}`);
    }
    return data.code;
}

// Maps a currency code to its primary region or category
function currencyCodeToRegion(currency) {
    const data = getCurrencyData(currency);
    return data.countries ? data.countries[0] : undefined; // Simplified handling
}

module.exports = {
    isValidCurrency,
    currencyCodeToNumber,
    numberToCurrencyCode,
    currencyCodeToRegion,
    ErrInvalidCurrency
};
