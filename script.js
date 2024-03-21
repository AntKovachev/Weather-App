const apiKey = "f89a508de5b0ad9467bef0b8d2b9130b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    let weatherIcon = document.querySelector(".weather-icon");
    
    const weatherCondition = data.weather[0].main;

    switch (weatherCondition) {
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;

        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
    }

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();