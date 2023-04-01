import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function renderCountries(dataCountries) { 
    const listCountries = document.querySelector(".country-list")
    const countryInfo = document.querySelector(".country-info")

    let countries = []

    let quantityContries = dataCountries.length;
    if (quantityContries > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.")
    } else if (quantityContries <= 10 && quantityContries > 2) {
        dataCountries.map(country => {
            countries += `
            <li>
                <img src="${country.flags.svg}" class="flag"/>
                <span class="country-name">${country.name}</span>
            </li>
            `
            listCountries.innerHTML = countries;   
        })
        countryInfo.innerHTML = "";
    } else {
        let country = dataCountries[0]
        let languages = []

        country.languages.map(language => { 
            languages.push(language.name)
        })

        countryInfo.innerHTML = `
        <div class="flags-country">
            <img src="${country.flags.svg}" class="flag"/>
            <h2 class="country-name">${country.name}</h2>
        </div>
        <ul class="list-countries">
            <li><span>Capital: </span>${country.capital}</li>

            <li><span>Population: </span>${country.population}</li>

            <li><span>Languages: </span>${languages.join(", ")}</li>
        </ul>
        `
        listCountries.innerHTML = "";
    }
};