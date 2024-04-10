import "../styles.css";
import createItem from "../components/item";
import Restaurant from "./src/images/restaurant.jpg";

const content = document.querySelector("#content");

export default function createHomePage() {
  content.innerHTML = "";

  let foodItems = ["burger", "sushi", "cordonbleu", "steak"];

  const homePage = document.createElement("div");
  const image = document.createElement("img");
  const top = document.createElement("div");
  const header = document.createElement("h1");
  const text = document.createElement("p");
  const main = document.createElement("div");
  const specials = document.createElement("div");
  const specialsHeader = document.createElement("h2");
  const menu = document.createElement("div");
  const menuHeader = document.createElement("h2");
  const footer = document.createElement("footer");
  const footerP = document.createElement("p");

  image.id = "main-image";
  image.src = Restaurant;
  image.alt = "Restaurant";
  top.id = "top";
  main.id = "main";
  specials.id = "specials";
  menu.id = "menu";
  footer.id = "footer";

  header.textContent = "Welcome to our restaurant!";
  text.textContent = "We serve the best food in town!";
  specialsHeader.textContent = "Our specials";
  menuHeader.textContent = "Our menu";
  footerP.textContent = "© 2024 Restaurant Page";

  top.appendChild(header);
  top.appendChild(text);

  specials.appendChild(specialsHeader);

  foodItems.forEach((item) => {
    const foodItem = createItem(item);
    specials.appendChild(foodItem);
  });

  main.appendChild(specials);

  menu.appendChild(menuHeader);

  foodItems.forEach((item) => {
    const foodItem = createItem(`/src/images/${item}.jpg`, item);
    menu.appendChild(foodItem);
  });
  foodItems.forEach((item) => {
    const foodItem = createItem(`/src/images/${item}.jpg`, item);
    menu.appendChild(foodItem);
  });

  main.appendChild(menu);
  footer.appendChild(footerP);
  homePage.appendChild(image);
  homePage.appendChild(top);
  homePage.appendChild(main);
  homePage.appendChild(footer);

  content.appendChild(homePage);
}
