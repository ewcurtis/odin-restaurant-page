
import brisket from './brisket.jpg';
import breakfastBurger from './breakfast-burger.jpg';
import classicBurger from './classic-smash.jpeg';

import bbqWings from './bbq-wings.jpg';
import scorchWings from './scorchin-wings.jpg';
import garlicWings from './garlic-wings.jpg';

import vanilla from './vanilla-shake.jpg';
import oreo from './oreo-shake.jpg';
import pb from './peanut-butter-shake.jpeg';

import sweetPotatoFries from './sweet-potato-fries.JPG';
import tots from './smash-tots.jpg';
import sprouts from './sprouts.jpg';

function menuComponent() {
    const content = document.createElement("div");
    content.setAttribute("class", "menu");
    
    const burgers = document.createElement("h1");
    burgers.textContent = "Burgers";
    content.appendChild(burgers);

    //burger items
    content.appendChild(item("Smoked Bacon Brisket Burger", "Certified Angus Beef, smoked aged cheddar cheese, brisket, applewood smoked bacon, pickles, bbq sauce, toasted brioche bun.",
    10, brisket));

    content.appendChild(item("Bacon, Egg, & Cheese Breakfast Burger", "Applewood-smoked bacon, two fried eggs, and cheddar cheese, all on a brioche bun.",
    8, breakfastBurger));

    content.appendChild(item("Classic Smashburger", "Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, Smash Sauce®, ketchup, toasted bun.",
    9, classicBurger));

    //Wings items
    const wings = document.createElement("h1");
    wings.textContent = "Wings";
    content.appendChild(wings);

    content.appendChild(item("BBQ Wings", "6 All Natural traditional bone-in wings, tossed with BBQ and served with a side of ranch dressing. Wings are sourced from USA and are hormone + steroid free.",
    8, bbqWings));

    content.appendChild(item("Scorchin' Hot Wings", "6 All Natural traditional bone-in wings, tossed with Nashville Hot and served with a side of ranch dressing. Wings are sourced from USA and are hormone + steroid free.",
    10, scorchWings));

    content.appendChild(item("Garlic Rosemary Wings", "6 All Natural traditional bone-in wings, tossed with our Signature Smash seasoning: rosemary, garlic salt pepper & thyme, served with a side of ranch dressing. Wings are sourced from USA and are hormone + steroid free.",
    9, garlicWings));

    //Shakes Items
    const shakes = document.createElement("h1");
    shakes.textContent = "Shakes";
    content.appendChild(shakes);

    content.appendChild(item("Vanilla Shake", "Made with Häagen-Dazs® Ice Cream.",
    5, vanilla));

    content.appendChild(item("Oreo Shake", "Made with Häagen-Dazs® Ice Cream.",
    5, oreo));

    content.appendChild(item("Peanut Butter Shake", "Made with Häagen Dazs® Ice Cream and REESE’S® Peanut Butter Sauce.",
    5, pb));

    //Side Items
    const sides = document.createElement("h1");
    sides.textContent = "Sides";
    content.appendChild(sides);

    content.appendChild(item("Sweet Potato Fries", "Sweet potato fries.",
    3, sweetPotatoFries));

    content.appendChild(item("Smash Tots®", "Crispy golden brown tots tossed in rosemary, garlic, & olive oil.",
    2, tots));

    content.appendChild(item("Crispy Brussels Sprouts", "Crispy brussels tossed with garlic, spices, served with ranch.",
    3, sprouts));

    return content;

}

function item(name, description, price, image) {
    const card = document.createElement("div");
    card.setAttribute("class", "menu-card");

    const foodName = document.createElement("h1");
    foodName.setAttribute("class", "food-name");
    foodName.textContent = name;
    card.appendChild(foodName);

    const descContainer = document.createElement("div");
    descContainer.setAttribute("class", "food-desc");
    descContainer.textContent = description;
    

    const cost = document.createElement("span");
    cost.setAttribute("class", "price");
    cost.textContent = ` $${price}`;
    descContainer.appendChild(cost);
    card.appendChild(descContainer);

    const pic = new Image();
    pic.src = image;
    pic.setAttribute("class", "food-img");
    card.appendChild(pic);

    return card;
}

export default menuComponent;