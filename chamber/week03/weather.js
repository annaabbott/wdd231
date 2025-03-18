const temperatureSpan = document.querySelector("#current-temp");
const weatherImg = document.querySelector("#weather-icon");
const weatherFigcaption = document.querySelector("figcaption");
const apiKey = "d5e4729c978ba0e7a32930e85c5fefae";
const lat = "49.75";
const long = "6.64";
const url =
`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;


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

function displayResults(data){
    console.log("json ready");
    temperatureSpan.innerHTML = `${data.main.temp}&deg F`;
    desc = data.weather[0].description;
    const imgSrc = ` https://openweathermap.org/img/wn/10d@2x.png${data.weather[0].icon}`

    weatherImg.setAttribute("src", imgSrc);
    weatherImg.setAttribute("alt", desc)
}