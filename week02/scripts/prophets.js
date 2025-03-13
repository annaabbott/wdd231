const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    cards.appendChild(card);
    let fullName = document.createElement("h2");
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    card.appendChild(fullName);
    let portrait = document.createElement("img");
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");
    card.appendChild(portrait);
    let birthdate = document.createElement("p");
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
  });
};

async function getProphetData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
  } catch (error) {
    console.error(error.message);
  }
}

getProphetData();
