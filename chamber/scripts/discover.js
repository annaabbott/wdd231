import { things_to_do } from "./data/discover.mjs";
console.log(things_to_do);

const locationCardsContainer = document.querySelector("#locationCards");

function displayLocations(things_to_do) {
  things_to_do.forEach((location) => {
    let locationCard = document.createElement("div");
    locationCardsContainer.appendChild(locationCard);
    let locationName = document.createElement("h2");
    locationName.textContent = `${location.name}`;
    locationCard.appendChild(locationName);
    let locationImg = document.createElement("img");
    locationImg.setAttribute("src", `${location.image_url}`);
    locationImg.setAttribute("alt", `${location.name}`);
    locationImg.setAttribute("loading", "lazy");
    locationImg.setAttribute("width", "300");
    locationImg.setAttribute("height", "200");
    locationCard.appendChild(locationImg);
    let locationAddress = document.createElement("address");
    locationAddress.textContent = `${location.address}`;
    locationAddress.id = "address";
    locationCard.appendChild(locationAddress);
    let locationDesc = document.createElement("p");
    locationDesc.textContent = `${location.description}`;
    locationCard.appendChild(locationDesc);
    let cardBtn = document.createElement("button");
    cardBtn.textContent = `Learn More`;
    locationCard.appendChild(cardBtn);
  });
}

displayLocations(things_to_do);

const visitCount = document.querySelector(".myVisitCount");
let numVisits = Number(window.localStorage.getItem("myVisitCount")) || 0;
console.log(numVisits);
if (numVisits >= 1) {
  visitCount.textContent = `Glad to see you again!`;
}

