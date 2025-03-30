const npBtn = document.querySelector("#npButton");
const bronzeBtn = document.querySelector("#bronzeBtn");
const silverBtn = document.querySelector("#silverBtn");
const goldBtn = document.querySelector("#goldBtn");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeModal");
const dialogBoxText = document.querySelector("#modal div");

// <!-- <h2>NP Level</h2>
// <p>
//   This level of Memebership is for our Non-Profit organizations. It
//   includes:
// </p>
// <ul>
//   <li>Access to advertising in all our Chamber publications</li>
//   <li>
//     Opportunities to connect with other business owners at our
//     Chamber networking events
//   </li>
//   <li>Advocacy and representation</li>
// </ul> -->

npBtn.addEventListener("click", () => {
  dialogBoxText.textContent = "";
  modal.showModal();
  let modalh2 = document.createElement("h2");
  modalh2.textContent = `NP Level`;
  dialogBoxText.appendChild(modalh2);
  let modalP = document.createElement("p");
  modalP.textContent = `This level of membership is for our Non-Profit organizations. It includes:`;
  modalh2.append(modalP);
  let modalul = document.createElement("ul");
  modalP.append(modalul);
  let benefit1 = document.createElement("li");
  benefit1.textContent = `Access to advertising in all our Chamber publications.`;
  modalul.appendChild(benefit1);
  let benefit2 = document.createElement("li");
  benefit2.textContent = `Opportunities to connect with other business owners at our networking events.`;
  modalul.appendChild(benefit2);
  let benefit3 = document.createElement("li");
  benefit3.textContent = `Advocacy and representation`;
  modalul.appendChild(benefit3);
});

bronzeBtn.addEventListener("click", () => {
  dialogBoxText.textContent = "";
  modal.showModal();
  let modalh2 = document.createElement("h2");
  modalh2.textContent = `Bronze Level`;
  dialogBoxText.appendChild(modalh2);
  let modalP = document.createElement("p");
  modalP.textContent = `Our Bronze Level membership includes:`;
  modalh2.append(modalP);
  let modalul = document.createElement("ul");
  modalP.append(modalul);
  let benefit1 = document.createElement("li");
  benefit1.textContent = `Access to advertising in all our Chamber publications.`;
  modalul.appendChild(benefit1);
  let benefit2 = document.createElement("li");
  benefit2.textContent = `Opportunities to connect with other business owners at our networking events.`;
  modalul.appendChild(benefit2);
  let benefit3 = document.createElement("li");
  benefit3.textContent = `Advocacy and representation`;
  modalul.appendChild(benefit3);
});

silverBtn.addEventListener("click", () => {
  dialogBoxText.textContent = "";
  modal.showModal();
  let modalh2 = document.createElement("h2");
  modalh2.textContent = `Bronze Level`;
  dialogBoxText.appendChild(modalh2);
  let modalP = document.createElement("p");
  modalP.textContent = `Our Silver Level membership includes all the benefits of the Bronze Level plus:`;
  modalh2.append(modalP);
  let modalul = document.createElement("ul");
  modalP.append(modalul);
  let benefit1 = document.createElement("li");
  benefit1.textContent = `Access to business training seminars.`;
  modalul.appendChild(benefit1);
  let benefit2 = document.createElement("li");
  benefit2.textContent = `Access to industry-specific events.`;
  modalul.appendChild(benefit2);
  let benefit3 = document.createElement("li");
  benefit3.textContent = `Access to member discounts.`;
  modalul.appendChild(benefit3);
});

goldBtn.addEventListener("click", () => {
  dialogBoxText.textContent = "";
  modal.showModal();
  let modalh2 = document.createElement("h2");
  modalh2.textContent = `Bronze Level`;
  dialogBoxText.appendChild(modalh2);
  let modalP = document.createElement("p");
  modalP.textContent = `Our Gold Level membership includes all the benefits of the Silver Level plus:`;
  modalh2.append(modalP);
  let modalul = document.createElement("ul");
  modalP.append(modalul);
  let benefit1 = document.createElement("li");
  benefit1.textContent = `Low-cost small-business loan availability`;
  modalul.appendChild(benefit1);
  let benefit2 = document.createElement("li");
  benefit2.textContent = `Access to affordable small business insurance`;
  modalul.appendChild(benefit2);
  let benefit3 = document.createElement("li");
  benefit3.textContent = `Increased access to member discounts.`;
  modalul.appendChild(benefit3);
});

closeModal.addEventListener("click", () => {
  modal.close();
});
