import createHomePage from "./pages/home";
import createAboutPage from "./pages/about";
import createContactPage from "./pages/contact";

const homeBtn = document.querySelector("#homeBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const contactBtn = document.querySelector("#contactBtn");

createHomePage();

homeBtn.addEventListener("click", () => {
  createHomePage();
});

aboutBtn.addEventListener("click", () => {
  createAboutPage();
});

contactBtn.addEventListener("click", () => {
  createContactPage();
});
