import './styles.css';

function contactComponent() {
    const content = document.createElement("div");
    content.setAttribute("class", "contacts");
    const phone = document.createElement("h1");
    phone.textContent = "Phone number: (574) 631-2320";
    content.appendChild(phone);

    const email = document.createElement("h1");
    email.textContent = "Email: feedback@smashburger.com";
    content.appendChild(email);

    const address = document.createElement("div");
    address.setAttribute("class", "address");
    const address1 = document.createElement("h1");
    address1.textContent = "Address: University of Notre Dame,";
    address.appendChild(address1);
    const address2 = document.createElement("h1");
    address2.textContent = "Smashburger Huddle Building 43 Notre Dame,";
    address.appendChild(address2);
    const address3 = document.createElement("h1");
    address3.textContent = "IN 46556";
    address.appendChild(address3);
    content.appendChild(address);

    return content;
}

export default contactComponent;