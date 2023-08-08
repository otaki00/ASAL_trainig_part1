// import fetch library to fetch the data from API
const fetch = require('node-fetch');




// arraow function to fetch for currency
const getCountries = async () => {
    const response = await fetch("https://gist.githubusercontent.com/tiagodealmeida/0b97ccf117252d742dddf098bc6cc58a/raw/f621703926fc13be4f618fb4a058d0454177cceb/countries.json")
    const jsonRes = await response.json()
    return jsonRes
}


// arraow function to fetch for country
const getCurrency = async () => {
    const response = await fetch("https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json")
    const jsonRes = await response.json()
    return jsonRes
}

let currency;
let countries;

(async () => {
    currency = await getCurrency()
    countries = await getCountries()


    // console.log(searhCurrencyByCode('USD'));
    // console.log(searhCurrencyByName('Euro'))
    // printCurrencyFormally()
    // searchCountryByName("United Arab Emirates")
    // let currSet = returnCurrencyWithoutDblicatSet()
    // console.log(currSet.size);
    // let numOfCurr = Object.keys(currency).length
    // console.log(numOfCurr);

    console.log(returnCurrencyWithoutDblicatManually().length);

})()


const searhCurrencyByCode = (code) => {
    return currency[code]
}

const searhCurrencyByName = (name) => {
    for (let code in currency) {
        if (currency[code].name.toLowerCase() == name.toLowerCase()) {
            return currency[code]
        }
    }

    return null
}


const printCurrencyFormally = () => {
    for (let code in currency) {
        console.log(`currency code: ${code}, and the name is: ${currency[code].name}`);
    }
}

const searchCountryByName = (name) => {
    countries = countries['countries'].country
    countries.map(country => {
        if (country.countryName == name) {
            console.log(`the country was found ${country} and is currency info is: ${currency[country.currencyCode]}`);
        }
    })

    return null
    // console.log(countries);
}


const searchCountryByCapital = (name) => {
    countries = countries['countries'].country
    countries.map(country => {
        if (country.capital === name) {
            console.log(`the country was found ${country} and is currency info is: ${currency[country.currencyCode]}`);
        }

    })

    return null
}


const returnCurrencyWithoutDblicatSet = () => {
    let currencySet = new Set()
    for (let code in currency) {
        currencySet.add(currency[code])
    }

    return currencySet
}


const returnCurrencyWithoutDblicatManually = () => {
    let currencyArr = []
    for (let code in currency) {
        if (!currencyArr.includes(currency[code])) {
            currencyArr.push(currency[code])
        }
    }

    return currencyArr
}