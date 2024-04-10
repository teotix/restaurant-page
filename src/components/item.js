export default function createItem(img, alternate) {
    const item = document.createElement('div');
    const image = document.createElement('img');
    const textElement = document.createElement('p');

    image.src = img;
    image.alt = alternate;
    textElement.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
    felis nec justo aliquam malesuada. Nullam nec purus consectetur,
    ultricies nunc in, tincidunt nunc. Nullam nec purus consectetur,
    ultricies nunc in, tincidunt nunc.`;


    item.appendChild(image);
    item.appendChild(textElement);

    return item;
}