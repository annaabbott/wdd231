const path = "scripts/members.json";

async function getMemberData() {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data.filter((member) => member.membershipLevel >= 2);
}

function pickRandomItems(list, r) {
  if (r >= list.length) {
    return list;
  }
  const output = [];
  let i, choice;
  for (i = 0; i < r; i++) {
    choice = Math.floor(Math.random() * list.length);
    output.push(list[choice]);
    list.splice(choice, 1);
  }
  return output;
}

function renderSpotlights(filteredData) {
  filteredData = pickRandomItems(filteredData, 3);
  filteredData.forEach((member) => {
    const spotlightCards = document.getElementById("spotlight");
    let companyCard = document.createElement("div");
    spotlightCards.appendChild(companyCard);
    let companyName = document.createElement("h3");
    companyName.textContent = `${member.name}`;
    companyCard.appendChild(companyName);
    let companyImg = document.createElement("img");
    companyImg.setAttribute("src", `images/${member.image}`);
    companyImg.setAttribute("alt", `${member.name}`);
    companyImg.setAttribute("loading", "lazy");
    companyImg.setAttribute("width", "300");
    companyImg.setAttribute("height", "300");
    companyCard.appendChild(companyImg);
    let phone = document.createElement("p");
    phone.textContent = `${member.phone}`;
    companyCard.appendChild(phone);
    let address = document.createElement("p");
    address.textContent = `${member.address}`;
    companyCard.appendChild(address);
    let website = document.createElement("a");
    website.textContent = `${member.website}`;
    companyCard.appendChild(website);
    website.setAttribute("href", `${member.website}`);
    let membershipLevel = document.createElement("p");
    membershipLevel.textContent = `${member.membershipLevel}`;
    companyCard.appendChild(membershipLevel);
  });
}

getMemberData()
  .then((filteredData) => renderSpotlights(filteredData))
  .catch((error) => console.error(error));
