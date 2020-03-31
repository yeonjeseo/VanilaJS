const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "073541a7c8b11459531340bef103b50b";

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric `)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude,
        longitude
    };
    saveCoords(coordObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access geolocation API");
}
function AskForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        AskForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        const latitude = parseCoords.latitude;
        const longitude = parseCoords.longitude;
        getWeather(latitude, longitude);
    }
}

function init() {
    loadCoords();
}

init();
