const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const forecastCont = document.querySelector('.forecast');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#windchill');

function calculateWindchill(num1, num2) {
    if (num1 <= 50 && num2 > 3.0) {
        let windChillFactor = 35.74 + (0.6215 * num1) - (35.75 * (num2 ** 0.16)) + ((0.4275 * num1) * (num2 ** 0.16));
        windChill.textContent = `${windChillFactor.toFixed(1)}°F`;
    } else {
        windChill.textContent = 'N/A';
    }
}

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function getLocationName(latitude, longitude) {
    try {
        const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`);
        if (response.ok) {
            const data = await response.json();
            const locationName = `${data.city}, ${data.state}, ${data.country}`;
            return locationName;
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
        return 'Location not found';
    }
}

function displayResults(data) {
    let icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', icon);
    let desc = data.weather[0].description;
    let temp = `${data.main.temp.toFixed(1)}°F`;
    let wind = data.wind.speed;
    currentTemp.textContent = `${temp} - ${desc}`;
    windSpeed.textContent = wind;
    calculateWindchill(parseInt(data.main.temp), wind);
    weatherIcon.style.width = "50px";
    weatherIcon.style.height = "50px";
}

async function getForecastData(latitude, longitude) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=5a8231c5a5421807f22f48fd534cb44d`);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    forecastCont.innerHTML = '';
    const days = []
    const dateNow = new Date();
    const dayNow = dateNow.getDate();
    let dayRange = 0;
    let counter = 0;

    //Source (Shecodes.com)
    data.list.forEach((forecast) => {
        const futureDate = new Date(forecast.dt * 1000);
        const nextDay = futureDate.getDate();
        if(dayNow !== nextDay && dayRange !== nextDay && counter <= 2) {
            counter++;
            dayRange = nextDay;
            days.push(forecast);
        }
    });

    days.forEach((item) => {
        const iconsrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
        const container = document.createElement("div");
        const date2 = document.createElement("span");
        const temp2 = document.createElement("span");
        const iconWeather = document.createElement("img");
        const hr = document.createElement("hr")

        const newDate = new Date(item.dt * 1000);
        let desc = item.weather[0].description;
        let highTemp = `${item.main.temp_max.toFixed(1)}°F`;
        let lowTemp = `${item.main.temp_min.toFixed(1)}°F`;
        iconWeather.setAttribute("src", iconsrc);
        iconWeather.setAttribute("alt", item.weather[0].main);
        date2.textContent = newDate.toLocaleString('default', {month: "short", day: "numeric"});
        temp2.innerHTML = `High ${highTemp}, ${desc}`;
        container.append(date2, iconWeather, temp2, hr);
        forecastCont.append(container);
        iconWeather.style.width = "50px";
        iconWeather.style.height = "50px";
        container.style.marginBottom = "20px";
        // forecastCont.innerHTML = `${temp} - ${desc}`;

    });
}

function getWeatherData(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=5a8231c5a5421807f22f48fd534cb44d`;
    apiFetch(url);
    getForecastData(latitude, longitude);
}

document.getElementById('getWeatherButton').addEventListener('click', async function() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    
    if (latitude && longitude && !isNaN(latitude) && !isNaN(longitude)) {
        const locationName = await getLocationName(latitude, longitude);
        const locationDisplay = document.getElementById('location');
        locationDisplay.textContent = `Location: ${locationName}`;
        
        getWeatherData(latitude, longitude);
    } else {
        alert('Please enter valid latitude and longitude values.');
    }
});