import '../style.css';
import CountryCardTpl from '../template/country-card.hbs';
import API from './fetchCountries';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchInput.addEventListener('input', onInputChange);

function onInputChange(evt) {
    evt.preventDefault();


// const input = evt.currentTarget;
const searchQuery = evt.target.value;

API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError)
    // .finally(() => input.reset());
}

function renderCountryCard(country) {
    const murkup = CountryCardTpl(country);
    refs.cardContainer.innerHTML = murkup;
}

function onFetchError(error) {
    alert('Такої країни нема!');
}