import {hamburgerBtn, navMenu} from "./navigation.mjs";
import {weatherFetch} from "./weather.mjs";
import {newsFetch} from "./news.mjs";
import { createModal1, createModal0 } from "./eventsModal.mjs";

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    // hamburgerBtn.classList.toggle("open");
  });
  
  weatherFetch();
  newsFetch();

  const btn00 = document.querySelector("#event00");
  btn00.addEventListener("click", () => {
    createModal0();
  });

  const btn01 = document.querySelector("#event01");
  btn01.addEventListener("click", () => {
    createModal1();
  });


  closeModal.addEventListener("click", () => {
    modal.close();
  });
  