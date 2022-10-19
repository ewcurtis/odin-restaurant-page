import './styles.css';
import homeScreen from './home.js';
import contactScreen from './contact.js';
import menuScreen from './menu.js';


 function component() {
    const content = document.createElement('div');
    content.setAttribute("class", "content");
    
    const credits = document.createElement("div");
    credits.setAttribute("class", "credits");
    credits.textContent = 'Photo by ';

    const aName = document.createElement("a");
    aName.setAttribute("href", "https://unsplash.com/@firedorange717?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    aName.textContent = "Joshua Kantarges ";
    credits.appendChild(aName);
    credits.appendChild(document.createTextNode("on"));


    const usplash = document.createElement("a");
    usplash.setAttribute("href", "https://unsplash.com/s/photos/grill-fire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    usplash.textContent = " Usplash";
    credits.appendChild(usplash);
    
    content.appendChild(credits);

    //main content
    const main = document.createElement("div");
    main.setAttribute("class", "main");

    //navbar
    const nav = document.createElement('div');
    nav.setAttribute("class", "navbar");

    const home = document.createElement("button");
    home.textContent = "Home";

    home.addEventListener("click", () => {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      main.appendChild(homeScreen());
    });

    const menu = document.createElement("button");
    menu.textContent = "Menu";

    menu.addEventListener("click", () => {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      main.appendChild(menuScreen());
    })

    const contact = document.createElement("button");
    contact.textContent = "Contact";

    contact.addEventListener("click", () => {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      main.appendChild(contactScreen());
    });

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    content.appendChild(nav);
    
    content.appendChild(main);
    
    return content;
  }
 
  document.body.appendChild(component());