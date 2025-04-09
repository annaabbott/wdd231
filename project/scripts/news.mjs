const lock = "8b28d375ffb34ede822aa9e438ac7c9e";
const today = new Date();
const weekAgo = new Date(today);
weekAgo.setDate(today.getDate() - 7);
const formattedDate = weekAgo.toISOString().split("T")[0];
console.log(formattedDate);
const newsurl = `https://newsapi.org/v2/everything?q=canary%20islands&from=${formattedDate}&apiKey=${lock}`;
const newsContainer = document.querySelector("#newsContainer");

function displayResults(data) {
  console.log(" news json ready");
  data.articles.forEach((article) => {
    let articleImg = document.createElement("img");
    articleImg.setAttribute("src", `${article.urlToImage}`);
    articleImg.setAttribute("alt", `${article.title}`);
    articleImg.setAttribute("alt", `${location.name}`);
    articleImg.setAttribute("loading", "lazy");
    articleImg.setAttribute("width", "300");
    articleImg.setAttribute("height", "200");
    newsContainer.appendChild(articleImg);
    let headline = document.createElement("h3");
    headline.textContent = `${article.title}`;
    newsContainer.appendChild(headline);
    let newsBtn = document.createElement("button");
    newsBtn.textContent = `More Information`;
    newsContainer.appendChild(newsBtn);
    //    let descP = document.createElement("p");
    //    descP.textContent = `${data.weather[0].description}`;
    //    newsContainer.appendChild(descP);
    //    let humidity = document.createElement("p");
    //    humidity.textContent = `humidity: ${data.main.humidity}`;
    //    newsContainer.appendChild(humidity);
    //    let feelsLike = document.createElement("p");
    //    feelsLike.textContent = `Feels like: ${data.main.feels_like}\u00b0 F`;
    //    newsContainer.appendChild(feelsLike);
  });
}

export async function newsFetch() {
  try {
    const response = await fetch(newsurl);
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
