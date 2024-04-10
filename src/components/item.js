import burger from "./src/images/burger.jpg";
import sushi from "./src/images/sushi.jpg";
import cordonbleu from "./src/images/cordonbleu.jpg";
import steak from "./src/images/steak.jpg";

export default function createItem(food) {
  const item = document.createElement("div");
  const image = document.createElement("img");
  const textElement = document.createElement("p");

  food === "burger"
    ? (image.src = burger)
    : food === "sushi"
    ? (image.src = sushi)
    : food === "cordonbleu"
    ? (image.src = cordonbleu)
    : (image.src = steak);

  image.alt = food;

  textElement.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
    felis nec justo aliquam malesuada. Nullam nec purus consectetur,
    ultricies nunc in, tincidunt nunc. Nullam nec purus consectetur,
    ultricies nunc in, tincidunt nunc.`;

  item.appendChild(image);
  item.appendChild(textElement);

  return item;
}
