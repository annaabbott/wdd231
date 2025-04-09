import {hamburgerBtn, navMenu} from "./navigation.mjs";
import {weatherFetch} from "./weather.mjs";
import {newsFetch} from "./news.mjs";


hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    // hamburgerBtn.classList.toggle("open");
  });
  
  weatherFetch()
  newsFetch()