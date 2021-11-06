const BASE_URL = 'https://restcountries.com';

function fetchCountries(text) {
  return fetch(`${BASE_URL}/v2/name/${text}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Eroor fetching data');
    })
    .catch(error => {
      console.error('Error: ', error);
    });
}
export default { fetchCountries };
