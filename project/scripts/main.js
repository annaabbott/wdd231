import {hamburgerBtn, navMenu} from "./navigation.mjs";
import {weatherFetch} from "./weather.mjs";
import {newsFetch} from "./news.mjs";
import { createModal1, createModal0 } from "./eventsModal.mjs";
import { displayFormData} from "./thankyou.mjs";

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    // hamburgerBtn.classList.toggle("open");
  });
  
 if (document.getElementById("newsContainer")) {
   weatherFetch();
 }
 if (document.getElementById("weatherContainer")) {
  newsFetch();
 }


  const btn00 = document.querySelector("#event00");
  const btn01 = document.querySelector("#event01");

if (btn00){
  btn00.addEventListener("click", () => {
    createModal0();
  });
}

  if (btn01) {
    btn01.addEventListener("click", () => {
      createModal1();
    });
  
  }

  const closeModal = document.querySelector("#closeModal");
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.close();
    });
  
  }
  if (document.getElementById("formResults")) {
    displayFormData()
  }

  const visitCount = document.querySelector(".myVisitCount");
let numVisits = Number(window.localStorage.getItem("myVisitCount")) || 0;
console.log(numVisits);
if (numVisits >= 1) {
  visitCount.textContent = `Number of visits to our website: ${numVisits}. Thank you for stopping by!`;
}
