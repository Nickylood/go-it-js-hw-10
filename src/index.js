import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from "./js/fetchCountries";
import renderCountries from "./js/renderCountries";

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("#search-box");
const listCountries = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

input.addEventListener("input", debounce(searchCountries, DEBOUNCE_DELAY))

function searchCountries(e) { 
    let country = e.target.value.trim()
    if (country) {
        fetchCountries(country)
            .then(dataCountries => {
                renderCountries(dataCountries)
            })
            .catch(error => {
                Notify.failure("Oops, there is no country with that name")
            })
    } else {
        listCountries.innerHTML = "";
        countryInfo.innerHTML = "";
    }
    
};
