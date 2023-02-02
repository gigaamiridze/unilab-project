const burgerMenu = document.querySelector(".burger-menu");
const headerContent = document.querySelector(".header-container");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  headerContent.classList.toggle("active");
  body.classList.toggle("open");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  headerContent.classList.remove("active");
  body.classList.remove("open");
}))