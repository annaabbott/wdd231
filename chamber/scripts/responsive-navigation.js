const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navMenu = document.querySelector(".navMenu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  // hamburgerBtn.classList.toggle("open");
});
