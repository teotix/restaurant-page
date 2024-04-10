import "../aboutStyles.css";

const content = document.querySelector("#content");

export default function createAboutPage() {
  content.innerHTML = "";

  const aboutPage = document.createElement("div");
  const header = document.createElement("h1");
  const text = document.createElement("p");

  aboutPage.id = "about";

  header.textContent = "About us";
  text.textContent = "We are a restaurant that serves the best food in town!";

  aboutPage.appendChild(header);
  aboutPage.appendChild(text);
  content.appendChild(aboutPage);

  return content;
}
