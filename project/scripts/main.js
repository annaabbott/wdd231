import {hamburgerBtn, navMenu} from "./navigation.mjs";
import {apiFetch} from "./weather.mjs";



hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    // hamburgerBtn.classList.toggle("open");
  });
  

  apiFetch()