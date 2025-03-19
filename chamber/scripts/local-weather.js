const temperatureDiv = document.querySelector("#current-temp");
const weatherImg = document.querySelector("#weather-icon");
const weatherFigcaption = document.querySelector("figcaption");
const apiKey = "d5e4729c978ba0e7a32930e85c5fefae";
const lat = "31.556522800460257";
const long = "-97.13295916934227";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
const forecastKey = ""

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

function displayResults(data) {
  console.log("json ready");
  temperatureDiv.innerHTML = `${data.main.temp}&deg F`;
  desc = data.weather[0].description;
  descP = document.createElement("p");
  descP.textContent = `${desc}`;
  temperatureDiv.appendChild(descP);
}
