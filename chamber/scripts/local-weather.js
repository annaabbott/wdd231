const temperatureDiv = document.querySelector("#current-temp");
const weatherImg = document.querySelector("#weather-icon");
const weatherFigcaption = document.querySelector("figcaption");
const apiKey = "d5e4729c978ba0e7a32930e85c5fefae";
const lat = "31.556522800460257";
const long = "-97.13295916934227";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
const forecasturl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
const today = () => new Date();


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    displayResults(data);
  } catch (error) {
    console.error(error.message);
  }
}
apiFetch();

async function forecastFetch() {
  try {
    const response = await fetch(forecasturl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    displayForecast(data);
  } catch (error) {
    console.error(error.message);
  }
}
forecastFetch();

function displayResults(data) {
  console.log("json ready");
  temperatureDiv.innerHTML = `${data.main.temp}&deg F`;
  desc = data.weather[0].description;
  descP = document.createElement("p");
  descP.textContent = `${desc}`;
  temperatureDiv.appendChild(descP);
}

function displayForecast(data) {
  console.log("got forecast");
  forecastDiv = document.querySelector("#forecast")
  forecastDiv.innerHTML = `${data.list[0].main.temp}&deg F`;
  tomorrowForecast = document.createElement("p");
  tomorrowForecast.innerHTML = `${data.list[7].main.temp}&deg F`;
  forecastDiv.append(tomorrowForecast);
  tomorrowForecast = document.createElement("p");
  tomorrowForecast.innerHTML = `${data.list[15].main.temp}&deg F`;
  forecastDiv.append(tomorrowForecast);

}