const path = "scripts/members.json";
const cards = document.querySelector("#cards");
const gridViewBtn = document.querySelector("#gridDisplay");
const listViewBtn = document.querySelector("#listDisplay");

const displayMembers = (members) => {
  cards.innerHTML = "";
  members.forEach((member) => {
    let card = document.createElement("section");
    cards.appendChild(card);
    cards.classList.add("grid");
    cards.classList.remove("list");
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

const displayMembersList = (members) => {
  cards.innerHTML = "";
  members.forEach((member) => {
    let row = document.createElement("section");
    cards.appendChild(row);
    cards.classList.add("list");
    cards.classList.remove("grid");
    let companyName = document.createElement("h2");
    companyName.textContent = `${member.name}`;
    row.appendChild(companyName);
    let address = document.createElement("p");
    address.textContent = `${member.address}`;
    row.appendChild(address);
    let phone = document.createElement("p");
    phone.textContent = `${member.phone}`;
    row.appendChild(phone);
    let website = document.createElement("a");
    website.textContent = `${member.website}`;
    row.appendChild(website);
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
    gridViewBtn.addEventListener("click", () => {
      displayMembers(data);
    });
    listViewBtn.addEventListener("click", () => {
      displayMembersList(data);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getMemberData();
