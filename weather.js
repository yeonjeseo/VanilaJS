const COORDS = "coords"
const API_KEY = "073541a7c8b11459531340bef103b50b";

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?${lat}&${lng}&appid={API_KEY}`); 
}

function saveCoords(coordObj){
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude,
        longitude
    };
    saveCoords(coordObj);
    getWeather(latitude,longitude);
}

function handleGeoError() {
    console.log("Can\'t access geolocation API");
}
function AskForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        AskForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
    }
}

function init(){
    loadCoords();
}

init();