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
    let articleDiv = document.createElement("div");
    newsContainer.appendChild(articleDiv);
    let articleImg = document.createElement("img");
    articleImg.setAttribute("src", `${article.urlToImage}`);
    articleImg.setAttribute("alt", `${article.title}`);
    articleImg.setAttribute("alt", `${location.name}`);
    articleImg.setAttribute("loading", "lazy");
    articleImg.setAttribute("width", "300");
    articleImg.setAttribute("height", "200");
    articleDiv.appendChild(articleImg);
    let headline = document.createElement("h3");
    headline.textContent = `${article.title}`;
    articleDiv.appendChild(headline);
       let descP = document.createElement("p");
       descP.textContent = `${article.description}`;
       articleDiv.appendChild(descP);
       let articleLink = document.createElement("a");
       articleLink.setAttribute("href", `${article.url}`);
       articleLink.innerText = `Read Article`;
       articleDiv.appendChild(articleLink);
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
