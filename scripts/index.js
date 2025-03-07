const verticalNav = document.querySelector(".navContainer");
verticalNav.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("element clicked:", e.target.id);
  verticalNav.classList.remove("visible");
});

const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", () => {
  verticalNav.classList.add("visible");
});

const closeBtn = document.querySelector(".closeBox");
closeBtn.addEventListener("click", () => {
  verticalNav.classList.remove("visible");
});

const currentDate = new Date();
let currentYear = currentDate.getFullYear();

const modified = new Date(document.lastModified);

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = modified;
