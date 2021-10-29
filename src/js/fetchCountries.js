const BASE_URL = 'https://restcountries.com'

function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}/v2/name/${searchQuery}`).then(response =>
        response.json(),
        );
}
export default { fetchCountries };