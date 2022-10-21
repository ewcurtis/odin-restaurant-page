import "./styles.css";
import burgerPic from "./burger.jpeg";
import wingsPic from "./wings-promo.jpg";
import shakesPic from "./shakes.jpg";

function homeComponent() {
    const content = document.createElement("div");
    content.setAttribute("class", "home");
    const greeting = document.createElement("h1");
    greeting.textContent = "Welcome to Smash Burger! Try out our Burgers, Wings, and Shakes!";

    content.appendChild(greeting);

    const food = document.createElement("div");
    food.setAttribute("class", "home-food");

    const burger = new Image();
    burger.src = burgerPic;
    food.appendChild(burger);

    const wings = new Image();
    wings.src = wingsPic;
    food.appendChild(wings);

    const shakes = new Image();
    shakes.src = shakesPic;
    food.appendChild(shakes);
    content.appendChild(food);

    const hours = document.createElement("h1");
    hours.textContent = "Hours";
    hours.style.textDecoration = "underline";
    content.appendChild(hours);

    const open = document.createElement("h1");
    open.textContent = "Monday - Saturday: 10am - 3pm";
    content.appendChild(open);

    const closed = document.createElement("h1");
    closed.textContent = "Sunday: closed";
    content.appendChild(closed);
    return content;
}

export default homeComponent;