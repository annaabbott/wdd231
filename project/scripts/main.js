import {hamburgerBtn, navMenu} from "./navigation.mjs";

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    // hamburgerBtn.classList.toggle("open");
  });
  