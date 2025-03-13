async function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "YOUR_API_KEY"; // Get API Key from OpenWeatherMap
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === 200) {
        document.getElementById("result").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        document.getElementById("result").innerHTML = "<p>City not found!</p>";
    }
}
