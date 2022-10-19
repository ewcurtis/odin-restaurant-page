import "./styles.css";

function homeComponent() {
    const content = document.createElement("h1");
    content.textContent = "Hello World!";
    return content;
}

export default homeComponent;