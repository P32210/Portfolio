import { initialiseDiv, initialiseParagraph, initialiseButton, appendChildren } from "./utilities.js";
import { allowSounds } from "./index.js";
export function askForCookies() {
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
        if (allowSounds == 1)
            new Audio("audio/accept.mp3").play();
    });
    buttons[1].addEventListener("click", () => {
        body.classList.add("hide");
        let date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = `preferences=00; expires=${date.toUTCString()}; path=/`;
        if (document.cookie[document.cookie.length - 1] == '1')
            new Audio("audio/accept.mp3");
    });
    if (document.cookie == "") {
        document.body.appendChild(body);
        appendChildren(body, [message, opts]);
        appendChildren(opts, buttons);
    }
}
export function notify(m) {
    let body = initialiseDiv("popup-dialog", "border-standard", "inverse");
    body.addEventListener("click", () => {
        body.classList.add("hide");
    });
    let message = initialiseParagraph(m, "sans-serif");
    document.body.appendChild(body);
    body.appendChild(message);
}
