const apiKey = 'e9745ce255d2e914bcec0c6efe21e6a2';
const weatherinfo = document.querySelector('.weatherpannel');
const nextdays = document.querySelector('.nextdays');
const weathernow = document.querySelector('.weathernow');
const currentCity = document.getElementById('current-city');

async function getWeather() {
    let city = document.querySelector('.strokavvoda').value;
    nextdays.innerHTML = '';
    weathernow.innerHTML = '';
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey;
    const response = await fetch(url);
    const weather = await response.json();
    console.log(weather);
    currentCity.innerHTML = weather.city.name;
    for (let i = 1; i <= 5; i++) {
        const j = i * 8 - 1;
        const card = document.createElement('div');
        card.classList.add('day');
        const img = document.createElement('img');
        img.src = 'https://openweathermap.org/img/wn/' + weather.list[j].weather[0].icon + '@2x.png';
        img.classList.add('img');
        card.appendChild(img);
        const description = document.createElement('div');
        description.classList.add('description');
        description.innerHTML = weather.list[j].weather[0].description;
        card.appendChild(description);
        const date = document.createElement('div');
        date.classList.add('date');
        date.innerHTML = weather.list[j].dt_txt;
        const temp = document.createElement('div');
        temp.classList.add('temp');
        temp.innerHTML = (weather.list[j].main.temp - 273.15).toFixed(1) + '°C';
        card.appendChild(date);
        card.appendChild(temp);
        const humidity = document.createElement('p');
        humidity.innerHTML = 'Humidity: ' + weather.list[j].main.humidity + '%';
        card.appendChild(humidity);
        const windSpeed = document.createElement('p');
        windSpeed.innerHTML = 'Wind speed: ' + weather.list[j].wind.speed + ' m/s';
        card.appendChild(windSpeed);
        nextdays.appendChild(card);
    }
    const currenttemp = document.createElement('div');
    currenttemp.classList.add('currenttemp');
    const currentconditions = document.createElement('div');
    currentconditions.classList.add('currentconditions');
    currenttemp.innerHTML = (weather.list[0].main.temp - 273.15).toFixed(1);
    currentconditions.innerHTML = weather.list[0].weather[0].description;
    weathernow.appendChild(currenttemp);
    weathernow.appendChild(currentconditions);
    const weatherIcon = document.createElement('img');
    weatherIcon.src = 'https://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png';
    weathernow.appendChild(weatherIcon);
    const humidityNow = document.createElement('p');
    humidityNow.innerHTML = 'Humidity: ' + weather.list[0].main.humidity + '%';
    weathernow.appendChild(humidityNow);
    const windSpeedNow = document.createElement('p');
    windSpeedNow.innerHTML = 'Wind speed: ' + weather.list[0].wind.speed + ' m/s';
    weathernow.appendChild(windSpeedNow);
}
const units = document.getElementById('units');
units.addEventListener('change', () => {
    if (units.value === 'Celcius') {
        const temps = document.querySelectorAll('.temp');
        temps.forEach((tempElem, i) => {
            const tempInKelvin = weather.list[i * 8 - 1].main.temp;
            tempElem.innerHTML = (tempInKelvin - 273.15).toFixed(1) + '°C';
        });
        currenttemp.innerHTML = (weather.list[0].main.temp - 273.15).toFixed(1);
    } else if (units.value === 'Fahrenheit') {
        const temps = document.querySelectorAll('.temp');
        temps.forEach((tempElem, i) => {
            const tempInKelvin = weather.list[i * 8 - 1].main.temp;
            tempElem.innerHTML = ((tempInKelvin - 273.15) * 1.8 + 32).toFixed(1) + '°F';
        });
        currenttemp.innerHTML = ((weather.list[0].main.temp - 273.15) * 1.8 + 32).toFixed(1);
    }
});
async function getWeatherHere() {
    let latitude, longitude, url;
    navigator.geolocation.getCurrentPosition(async function(position) {
        nextdays.innerHTML = '';
        weathernow.innerHTML = '';
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude.toFixed(2) + "&lon=" + longitude.toFixed(2) + "&appid=" + apiKey;
        const response = await fetch(url);
        const weather = await response.json();
        console.log(weather);
        currentCity.innerHTML = weather.city.name;
        for (let i = 1; i <= 5; i++) {
            const j = i * 8 - 1;
            const card = document.createElement('div');
            card.classList.add('day');
            const img = document.createElement('img');
            img.src = 'https://openweathermap.org/img/wn/' + weather.list[j].weather[0].icon + '@2x.png';
            img.classList.add('img');
            card.appendChild(img); 
            const description = document.createElement('div');
            description.classList.add('description');
            description.innerHTML = weather.list[j].weather[0].description;
            card.appendChild(description);
            const date = document.createElement('div');
            date.classList.add('date');
            date.innerHTML = weather.list[j].dt_txt; 
            const temp = document.createElement('div');
            temp.classList.add('temp');
            temp.innerHTML = (weather.list[j].main.temp - 273.15).toFixed(1) + '°C';
            card.appendChild(date);
            card.appendChild(temp);
            const humidity = document.createElement('p');
            humidity.innerHTML = 'Humidity: ' + weather.list[j].main.humidity + '%';
            card.appendChild(humidity);
            const windSpeed = document.createElement('p');
            windSpeed.innerHTML = 'Wind speed: ' + weather.list[j].wind.speed + ' m/s';
            card.appendChild(windSpeed);
            nextdays.appendChild(card);
        }
        const currenttemp = document.createElement('div');
        currenttemp.classList.add('currenttemp');
        const currentconditions = document.createElement('div');
        currentconditions.classList.add('currentconditions');
        currenttemp.innerHTML = (weather.list[0].main.temp - 273.15).toFixed(1);
        currentconditions.innerHTML = weather.list[0].weather[0].description;
        weathernow.appendChild(currenttemp);
        weathernow.appendChild(currentconditions);
        const weatherIcon = document.createElement('img');
        weatherIcon.src = 'https://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png';
        weathernow.appendChild(weatherIcon);
        const humidityNow = document.createElement('p');
        humidityNow.innerHTML = 'Humidity: ' + weather.list[0].main.humidity + '%';
        weathernow.appendChild(humidityNow);
        const windSpeedNow = document.createElement('p');
        windSpeedNow.innerHTML = 'Wind speed: ' + weather.list[0].wind.speed + ' m/s';
        weathernow.appendChild(windSpeedNow);
    });

     
    

    
}