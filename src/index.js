import './styles.css';


 function component() {
    const content = document.createElement('div');
    content.setAttribute("class", "content");
    

    const nav = document.createElement('div');
    nav.setAttribute("class", "navbar");

    const home = document.createElement("button");
    home.textContent = "Home";

    const menu = document.createElement("button");
    menu.textContent = "Menu";

    const contact = document.createElement("button");
    contact.textContent = "Contact";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    content.appendChild(nav);


    const main = document.createElement("div");
    main.setAttribute("class", "main");
    main.textContent = "hi";
    content.appendChild(main);
    
    return content;
  }
 
  document.body.appendChild(component());