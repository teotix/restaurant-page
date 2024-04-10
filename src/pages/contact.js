import "../contactStyles.css";

const content = document.querySelector("#content");

export default function createContactPage() {
  content.innerHTML = "";

  const contactPage = document.createElement("div");
  const header = document.createElement("h1");
  const text = document.createElement("p");
  const form = document.createElement("form");
  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const messageLabel = document.createElement("label");
  const messageInput = document.createElement("textarea");
  const submitButton = document.createElement("button");

  contactPage.id = "contact";
  header.textContent = "Contact us";
  text.textContent = "Please fill out the form below to contact us.";
  nameLabel.textContent = "Name:";
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  emailLabel.textContent = "Email:";
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  messageLabel.textContent = "Message:";
  messageInput.id = "message";
  messageInput.name = "message";
  submitButton.textContent = "Submit";
  form.method = "post";
  form.action = "https://httpbin.org/post";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageInput);
  form.appendChild(submitButton);

  contactPage.appendChild(header);
  contactPage.appendChild(text);
  contactPage.appendChild(form);

  content.appendChild(contactPage);

  return content;
}
