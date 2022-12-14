if (localStorage.getItem('logged') !== 'true') {
    location.href = 'index.html';
}

import jugadores from "../data/jugadores.js";

const selector = document.querySelector("#select-location");
jugadores.forEach((jugador) => selector.innerHTML += `<option value=${jugador.coordenada}>${jugador.jugador}</option>`);


const latlng = jugadores[0].coordenada;
let map = L.map('map').setView(latlng, 15);
map.zoomControl.setPosition('bottomright');

const marker = L.marker(jugadores[0].coordenada).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.querySelector("#select-location").addEventListener("change", (e) => {
    const coords = e.target.value.split(",");
    map.flyTo(coords, 16);
    L.marker(coords).addTo(map);
});


const logout = document.querySelector('.logout');
logout.addEventListener('click', () => {
    localStorage.clear();
    location.href = 'index.html';
});









