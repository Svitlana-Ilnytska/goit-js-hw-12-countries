import '../style.css';
import CountryCardTpl from '../template/country-card.hbs';
import CountriesListTpl from '../template/countries-list.hbs';
import API from './fetchCountries';
import getRefs from './get-refs';
import * as _ from "lodash";

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = getRefs();

refs.searchInput.addEventListener("input", _.debounce(onInputChange, 500));

function onInputChange(evt) {
    evt.preventDefault();

// const input = evt.currentTarget;
const searchQuery = evt.target.value;

API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError)
    .finally(() => refs.searchInput.value === '');
}

function onFetchError() {
    error({
    title: false,
    text: 'Too many matches found. Please enter a more specific query!=)',
    shadow: true,
    delay: 1000,
})}

function renderCountryCard(country) {
    refs.cardContainer.innerHTML = '';
    if(country.length === 1) {
    const murkupCountry = CountryCardTpl(country);
    refs.cardContainer.innerHTML = murkupCountry;
    } else if (country.length > 1 && country.length < 8) {
        const murkupCountries = CountriesListTpl(country);
        refs.cardContainer.innerHTML = murkupCountries;
    } else {
        onFetchError();
    }
}

