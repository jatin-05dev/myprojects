let input = document.getElementById("in");
let btn = document.getElementById("se")
async function weatherdata(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf35c9f3cf3c386e495bcc8f8c167491&units=metric`;
    let reponse = await fetch(url);
    if (reponse.status == 404) {
        document.getElementById("city-name").innerHTML = "invalid city"
    }
    else {
        let data = await reponse.json()
        console.log(data)
        document.getElementById("city-name").innerHTML = "City" + "  " + data.name
        document.getElementById("temp-value").innerHTML = "Temperature" + " " + data.main.temp + "°C"
        document.getElementById("humidity-value").innerHTML = "Humidity" + " " + data.main.humidity + "%"
        document.getElementById("wind-value").innerHTML = "wind" + " " + data.wind.speed + "km/h"
        let iconCode = data.weather[0].icon; // e.g., "01d", "09n"
        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-icon").src = iconUrl;
        document.getElementById("weather-icon").alt = data.weather[0].description;
    }
}
btn.addEventListener("click", () =>{
    weatherdata(input.value)
})