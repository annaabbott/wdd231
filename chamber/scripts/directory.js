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
    companyImg.setAttribute("width", "300");
    companyImg.setAttribute("height", "300");
    card.appendChild(companyImg);
    let address = document.createElement("p");
    address.textContent = `${member.address}`;
    card.appendChild(address);
    let phone = document.createElement("p");
    phone.textContent = `${member.phone}`;
    card.appendChild(phone);
    let website = document.createElement("a");
    website.textContent = `${member.website}`;
    card.appendChild(website);
    website.setAttribute("href", `${member.website}`);
  });
};

async function getMemberData() {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error(error.message);
  }
}

getMemberData();
