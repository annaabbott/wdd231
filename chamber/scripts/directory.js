const path = "scripts/members.json";
const cards = document.querySelector("#cards");

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    cards.appendChild(card);
    let companyName = document.createElement("h2");
    companyName.textContent = `${member.name}`;
    card.appendChild(companyName);
    let companyImg = document.createElement("img");
    companyImg.setAttribute("src", `images/${member.image}`);
    companyImg.setAttribute("alt", `${member.name}`);
    companyImg.setAttribute("loading", "lazy");
    companyImg.setAttribute("width", "340");
    companyImg.setAttribute("height", "440");
    card.appendChild(companyImg);
    // let birthdate = document.createElement("p");
    // birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
  });
};

async function getMemberData() {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
  } catch (error) {
    console.error(error.message);
  }
}

getMemberData();
