import { initialiseDiv, initialiseParagraph, initialiseButton, appendChildren, } from "./utilities.js";
let body = initialiseDiv("popup-cookies", "border-standard", "inverse");
let opts = initialiseDiv("main", "no-border", "transparent");
let message = initialiseParagraph(`
    "This site uses cookies", and so on. You know the spiel.<br>
    Only used to remember your chosen style and sound effects`, "sans-serif");
let buttons = [
    initialiseButton("Deny", "button-snug", "border-smooth", "transparent", "courier-new"),
    initialiseButton("Allow", "button-snug", "border-smooth", "transparent", "courier-new")
];
buttons[0].addEventListener("click", () => {
    body.classList.add("hide");
    document.cookie = "";
    if (document.cookie[document.cookie.length - 1] == '1')
        new Audio("audio/accept.mp3").play();
});
buttons[1].addEventListener("click", () => {
    body.classList.add("hide");
    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = `preferences=00; expires=${date.toUTCString()}; path=/`;
    if (document.cookie[document.cookie.length - 1] == '1')
        new Audio("audio/accept.mp3").play();
});
if (document.cookie == "") {
    document.body.appendChild(body);
    appendChildren(body, [message, opts]);
    appendChildren(opts, buttons);
}
