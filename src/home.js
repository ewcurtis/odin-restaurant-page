import "./styles.css";
import burgerPic from "./blackbean.jpg";
import wingsPic from "./wings-promo.jpg";
import shakesPic from "./shakes.jpg";

function homeComponent() {
    const content = document.createElement("div");
    content.setAttribute("class", "home");
    const greeting = document.createElement("h1");
    greeting.textContent = "Welcome to Smash Burger! Try out our Burgers, Wings, and Shakes!";

    content.appendChild(greeting);

    const burger = new Image();
    burger.src = burgerPic;
    content.appendChild(burger);

    const wings = new Image();
    wings.src = wingsPic;
    content.appendChild(wings);

    const shakes = new Image();
    shakes.src = shakesPic;
    content.appendChild(shakes);
    return content;
}

export default homeComponent;