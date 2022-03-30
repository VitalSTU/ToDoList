import {UI_ELEMENTS, showWeather, toggleFavoriteCity, addFavoriteCityToInterface
    , deleteFavoriteCityFromInterface, toggleHeartButton, showTab/*, showForecast*/} from "./view.js";

window.addEventListener('unhandledrejection', function(event) {
    alert(event.promise);
    alert(event.reason);
});
UI_ELEMENTS.FORM_SEARCH.addEventListener('submit', function(event){ showWeather(event); });
UI_ELEMENTS.HEART_BTN.addEventListener('click', toggleFavoriteCity);
for (const tab of document.querySelectorAll('.main-tabs__item')) {
    tab.addEventListener('click', function(event){ showTab(event); });
}

const PROTOCOL = 'https';
const HOST = 'openweathermap.org';
const URL_WEATHER = `${PROTOCOL}://api.${HOST}/data/2.5/weather`;
const URL_FORCAST = `${PROTOCOL}://api.${HOST}/data/2.5/forecast`;
export const URL_ICONS = `${PROTOCOL}://${HOST}/img/wn/`;
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const UNITS = 'units=metric';
const FORECAST_PERIOD = 'cnt=7';
export const favoriteCities = [];

export function getWeather(cityName = UI_ELEMENTS.INPUT_SEARCH.value) {
    const LANG = `lang=${UI_ELEMENTS.HTML.getAttribute('lang')}`;
    const uri = `${URL_WEATHER}?q=${cityName}&appid=${API_KEY}&${UNITS}&${LANG}`;

    return fetch(uri)
        .then(response => {
            const statusCode = response.status;
            if (statusCode === 404) {
                throw new SyntaxError(response.statusText);
            } else if (statusCode < 200 || statusCode > 299) {
                throw new Error(response.statusText);
            }

            return response.json();
        })
        .catch(error => {
            if (error instanceof SyntaxError) {
                alert(error);
            }

            throw error;
        });
}

export function currentCityIsSaved() {
    return favoriteCities.includes(UI_ELEMENTS.TITLES_CITY_NOW.innerText);
}

export function saveCityToFavorites(cityName) {
    favoriteCities.push(cityName);
    addFavoriteCityToInterface(cityName);

    return favoriteCities;
}

export function removeCityFromFavorites(cityName) {
    favoriteCities.splice(favoriteCities.indexOf(cityName), 1);
    deleteFavoriteCityFromInterface(cityName);
    toggleHeartButton();

    return favoriteCities;
}