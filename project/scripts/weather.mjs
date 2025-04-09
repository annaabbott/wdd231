 const lat = "28.120612482691165";
 const long = "-15.433799672840701";
 const lock = "d5e4729c978ba0e7a32930e85c5fefae";
 const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${lock}&units=imperial`;
 const weatherContainer = document.querySelector("#weatherContainer");



function displayResults(data) {
    console.log("json ready");
    let lasPalmas = document.createElement("h3");
    lasPalmas.textContent = `Las Palmas de Gran Canaria`;
    weatherContainer.appendChild(lasPalmas);
    let temp = document.createElement("p");
    temp.textContent = `${data.main.temp}\u00b0 F`;
    weatherContainer.appendChild(temp);
    let descP = document.createElement("p");
    descP.textContent = `${data.weather[0].description}`;
    weatherContainer.appendChild(descP);
    let humidity = document.createElement("p");
    humidity.textContent = `humidity: ${data.main.humidity}`;
    weatherContainer.appendChild(humidity);
    let feelsLike = document.createElement("p");
    feelsLike.textContent = `Feels like: ${data.main.feels_like}\u00b0 F`;
    weatherContainer.appendChild(feelsLike);
  }
  

export async function apiFetch() {
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
  