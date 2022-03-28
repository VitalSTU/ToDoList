import {getWeather, URL_ICONS, ERROR/*, favoriteCities*/} from "./main.js";

export const UI_ELEMENTS = {
    HTML: document.querySelector('HTML'),
    FORM_SEARCH: document.querySelector('.search-form'),
    INPUT_SEARCH: document.querySelector('.search__input'),
    NOW_TEMPERATURE: document.querySelector('.weather-now__temperature'),
    NOW_WEATHER: document.querySelector('.weather-now__img'),
    TITLES_CITY_NOW: document.querySelector('.title-city-now'),
    //TITLES_CITY_DETAILS: document.querySelector('.weather-details__title'),
    //TITLES_CITY_FORECAST: document.querySelector('.weather-forecast__title'),
    //HEART_BTN: document.querySelector('.weather-now__btn'),
    //TABS: document.querySelectorAll('.main-tabs__block'),
    //TABS_BUTTONS: document.querySelectorAll('.main-tabs__item'),
    //FAVORITE_CITIES: document.querySelector('.city-list'),
    //DETAILS_TEMPERATURE: document.querySelector('.temperature'),
    //DETAILS_FEELS_LIKE: document.querySelector('.feels_like'),
    //DETAILS_WEATHER: document.querySelector('.weather'),
    //DETAILS_SUNRISE: document.querySelector('.sunrise'),
    //DETAILS_SUNSET: document.querySelector('.sunset'),
    //FORECAST_LIST: document.querySelector('.weather-forecast__list'),
};

export async function showWeather(event) {
    event.preventDefault();
    
    const response = await getWeather();
    console.log(response);

    if (response !== ERROR) {
        const icon = response.weather[0].icon;

        UI_ELEMENTS.TITLES_CITY_NOW.innerHTML = response.name;
        UI_ELEMENTS.NOW_TEMPERATURE.innerHTML = response.main.temp;
        UI_ELEMENTS.NOW_WEATHER.src = `${URL_ICONS}${icon}@2x.png`;
    }
}

//function convertTime(ms){
//    return new Date( ms * 1000).toLocaleTimeString('en-GB', {
//        hour: 'numeric',
//        minute: 'numeric'
//    });
//}

//function convertDate(date){
//    return new Date(date * 1000).toLocaleDateString('en-GB', {
//        month: 'short',
//        day: '2-digit',
//    });
//}
