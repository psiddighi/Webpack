// main.js
import queryString from 'query-string';

let page = 1;
const size = 30;

function fetchCities() {
    const start = (page - 1) * size;
    fetch(`https://demo-backendcities.azurewebsites.net/?cuid=hajIUIksk983LLP11112220&size=${size}&start=${start}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityList').innerHTML = data.map(city => `<p>${city.name}</p>`).join('');
        });
}

document.getElementById('prev').addEventListener('click', (e) => {
    e.preventDefault();
    if (page > 1) {
        page--;
        fetchCities();
    }
});

document.getElementById('next').addEventListener('click', (e) => {
    e.preventDefault();
    page++;
    fetchCities();
});

fetchCities();