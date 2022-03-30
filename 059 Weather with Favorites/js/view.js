import {getWeather, URL_ICONS, currentCityIsSaved, saveCityToFavorites, removeCityFromFavorites} from "./main.js";

export const UI_ELEMENTS = {
    HTML: document.querySelector('HTML'),
    FORM_SEARCH: document.querySelector('.search-form'),
    INPUT_SEARCH: document.querySelector('.search__input'),
    NOW_TEMPERATURE: document.querySelector('.weather-now__temperature'),
    NOW_WEATHER: document.querySelector('.weather-now__img'),
    TITLES_CITY_NOW: document.querySelector('.title-city-now'),
    TITLES_CITY_DETAILS: document.querySelector('.weather-details__title'),
    //TITLES_CITY_FORECAST: document.querySelector('.weather-forecast__title'),
    HEART_BTN: document.querySelector('.weather-now__btn'),
    //TABS: document.querySelectorAll('.main-tabs__block'),
    //TABS_BUTTONS: document.querySelectorAll('.main-tabs__item'),
    FAVORITE_CITIES: document.querySelector('.city-list'),
    DETAILS_TEMPERATURE: document.querySelector('.temperature'),
    DETAILS_FEELS_LIKE: document.querySelector('.feels_like'),
    DETAILS_WEATHER: document.querySelector('.weather'),
    DETAILS_SUNRISE: document.querySelector('.sunrise'),
    DETAILS_SUNSET: document.querySelector('.sunset'),
    //FORECAST_LIST: document.querySelector('.weather-forecast__list'),
};

export async function showWeather(event) {
    event.preventDefault();
    
    try {
        const cityName = getCityName(event.target);
        const response = await getWeather(cityName);

        showWeatherNow(response);
        showWeatherDetails(response);
        showWeatherForecast(response);
    } catch (error) {
        //alert(`${error.constructor.name}: ${error.message}`);
    }
}

function showWeatherNow(response) {
    const icon = response.weather[0].icon;

    UI_ELEMENTS.TITLES_CITY_NOW.innerHTML = response.name;
    UI_ELEMENTS.NOW_TEMPERATURE.innerHTML = `${response.main.temp}°`;
    UI_ELEMENTS.NOW_WEATHER.src = `${URL_ICONS}${icon}@2x.png`;

    toggleHeartButton();
}

function showWeatherDetails(response) {
    const timeOffset = response.timezone + (new Date().getTimezoneOffset() * 60);

    UI_ELEMENTS.TITLES_CITY_DETAILS.innerHTML = response.name;
    UI_ELEMENTS.DETAILS_TEMPERATURE.innerHTML = `${response.main.temp}°`;
    UI_ELEMENTS.DETAILS_FEELS_LIKE.innerHTML = `${response.main.feels_like}°`;

    UI_ELEMENTS.DETAILS_WEATHER.innerHTML = response.weather[0].main;
    UI_ELEMENTS.DETAILS_SUNRISE.innerHTML = convertTime(response.sys.sunrise + timeOffset);
    UI_ELEMENTS.DETAILS_SUNSET.innerHTML = convertTime(response.sys.sunset + timeOffset);
}

function showWeatherForecast(response) {
    //TODO
}

function getCityName(elem) {
    const searchForm = UI_ELEMENTS.FORM_SEARCH;
    const favoriteList = UI_ELEMENTS.FAVORITE_CITIES;
    let result;

    if (searchForm.contains(elem)) {
        result = UI_ELEMENTS.INPUT_SEARCH.value;
    } else if (favoriteList.contains(elem)) {
        result = elem.innerText;
    }

    return result;
}

export function toggleFavoriteCity() {
    const cityName = UI_ELEMENTS.TITLES_CITY_NOW.innerText;

    if (!currentCityIsSaved()) {
        saveCityToFavorites(cityName);
    } else {
        removeCityFromFavorites(cityName);
    }
    
    toggleHeartButton();
}

export function toggleHeartButton() {
    if (currentCityIsSaved() && !heartButtonIsActive()) {
        UI_ELEMENTS.HEART_BTN.classList.add('active-heard');
    } else if (!currentCityIsSaved() && heartButtonIsActive()) {
        UI_ELEMENTS.HEART_BTN.classList.remove('active-heard');
    }
}

export function addFavoriteCityToInterface(cityName) {
    const favoriteCityes = UI_ELEMENTS.FAVORITE_CITIES;
    const li = document.createElement('li');
    const button = document.createElement('button');

    li.classList.add('city-list__item');
    li.addEventListener('click', function(event){ showWeather(event); });
    button.classList.add('city-list__close-btn');
    button.addEventListener('click', function(){ removeCityFromFavorites(cityName); });

    favoriteCityes.append(li);
    li.append(cityName);
    li.append(button);
}

export function deleteFavoriteCityFromInterface(cityName) {
    let city = Array.from(document.querySelectorAll('.city-list__item')).find(elem => elem.innerText === cityName);
    city.outerHTML = '';
}

function heartButtonIsActive() {
    return UI_ELEMENTS.HEART_BTN.classList.contains('active-heard');
}

export function showTab(event) {
    const classItemActive = 'main-tabs__item--active';
    const classBlockActive = 'main-tabs__block--active';
    const classBody = 'main-tabs__body';

    const oldTabItem = document.querySelector(`.${classItemActive}`);
    const newTabItem = event.target;
    const newTabId = newTabItem.getAttribute('href');

    const tabBlocks = document.querySelector(`.${classBody}`);
    const oldTabBlock = tabBlocks.querySelector(`.${classBlockActive}`);
    const newTabBlock = tabBlocks.querySelector(newTabId);

    if (newTabBlock !== oldTabBlock) {
        oldTabItem.classList.remove(classItemActive);
        newTabItem.classList.add(classItemActive);
        oldTabBlock.classList.remove(classBlockActive);
        newTabBlock.classList.add(classBlockActive);
    }
}

function convertTime(ms){
    return new Date(ms * 1000).toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric'
    });
}

//function convertDate(date){
//    return new Date(date * 1000).toLocaleDateString('en-GB', {
//        month: 'short',
//        day: '2-digit',
//    });
//}
