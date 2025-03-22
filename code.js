import { initialiseDiv, initialiseHeader, initialiseIcon, appendChildren, getStyle } from "./utilities.js";
function initialisePre(t, f) {
    let pre = document.createElement("pre");
    pre.innerText = t;
    pre.classList.add("paragraph");
    pre.classList.add(f);
    return pre;
}
let siteTitle = document.createElement("title");
siteTitle.textContent = "Website";
let style = document.createElement("link");
style.rel = "stylesheet";
style.href = getStyle();
let icon = initialiseIcon("icon.ico");
appendChildren(document.head, [siteTitle, style, icon]);
let cont = [
    initialiseDiv("code", "border-code", "code-block"),
    initialiseDiv("code", "border-code", "code-block"),
    initialiseDiv("code", "border-code", "code-block"),
    initialiseDiv("code", "border-code", "code-block")
];
let headers = [
    initialiseHeader("h3", "index.ts", "courier-new"),
    initialiseHeader("h3", "code.ts (this page)", "courier-new"),
    initialiseHeader("h3", "dialogbox.ts", "courier-new"),
    initialiseHeader("h3", "utilities.ts", "courier-new")
];
let code = [
    initialisePre(`
import {
    initialiseButton,
    initialiseDiv,
    initialiseHeader,
    initialiseList,
    initialiseListItem,
    initialiseParagraph,
    initialiseIcon,
    appendChildren,
    getStyle
} from "./utilities.js"
import {
    askForCookies,
    notify
} from "./dialogbox.js";

let siteTitle: HTMLTitleElement = document.createElement("title");
siteTitle.textContent = "Website";
let style: HTMLLinkElement = document.createElement("link");
style.rel = "stylesheet";
style.href = getStyle();
let icon = initialiseIcon("icon.ico");

appendChildren(document.head, [siteTitle, style, icon]);

export let allowSounds: number = (document.cookie != "") ? Number(document.cookie[document.cookie.length - 1]) : 0;
let container: HTMLDivElement = initialiseDiv("container", "no-border", "transparent");
let navBar: HTMLDivElement = initialiseDiv("bar", "border-standard", "gradient", "sans-serif");
let popup: HTMLDivElement = initialiseDiv("popup", "border-standard", "gradient");
popup.classList.add("hidden");
let pictureFull: HTMLImageElement = document.createElement("img");
pictureFull.src = "wolf_TNO.png";
pictureFull.classList.add("picture-full");
let profilePicture: HTMLImageElement = document.createElement("img");
profilePicture.src = "wolf_TNO.png";
profilePicture.classList.add("profile");
profilePicture.classList.add("profile-picture");
profilePicture.alt = "Profile picture";
profilePicture.addEventListener("click", () => {
    if (profilePicture.src == "https://p32210.github.io/Portfolio/wolf_TNO.png") {
        profilePicture.src = "player.png";
        pictureFull.src = "player.png";
    }
    else {
        profilePicture.src = "wolf_TNO.png";
        pictureFull.src = "wolf_TNO.png";
    }
    if (allowSounds == 1) new Audio("audio/switch.mp3").play();
});
profilePicture.addEventListener("mouseenter", () => {
    popup.classList.replace("hidden", "show");
});
profilePicture.addEventListener("mouseleave", () => {
    popup.classList.replace("show", "hidden");
});
let title: HTMLHeadingElement = initialiseHeader("h1", "Player532210", "courier-new");
let separator: HTMLDivElement = initialiseDiv("vl", "separator", "font")
let navBarButtons: any[] = [
    initialiseButton("Source code", "button-snug", "border-smooth", "transparent", "courier-new", "source.html"),
    initialiseButton("Delete cookies", "button-snug", "border-smooth", "transparent", "courier-new"),
    initialiseDiv("select", "no-border", "transparent")];
navBarButtons[0].addEventListener("click", () => {
    if (allowSounds == 1) new Audio("audio/echo.mp3").play();
});
navBarButtons[1].addEventListener("click", () => {
    if (document.cookie != "") {
        document.cookie = "preferences=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        notify("Cookies deleted");
    }
    else notify("Cookies aren't set");
});
let select: any[] = [
    initialiseButton("Site settings", "button-snug", "border-smooth", "transparent", "courier-new"),
    initialiseDiv("collapsable", "border-standard", "inverse")];
select[0].addEventListener("click", () => {
    if (select[1].classList.contains("hidden")) {
        select[1].classList.replace("hidden", "show");
        if (allowSounds == 1) new Audio("audio/retract.mp3").play();
    }
    else if (select[1].classList.contains("show")) {
        select[1].classList.replace("show", "hidden");
        if (allowSounds == 1) new Audio("audio/expand.mp3").play();
    }
});
select[1].classList.add("hidden");
let options: HTMLButtonElement[] = [
    initialiseButton("Theme", "button-wide", "border-code", "transparent", "courier-new"),
    initialiseButton("Enable sounds", "button-wide", "border-code", "transparent", "courier-new")];
let styles: string[] = ["styles/default.css", "styles/light.css", "styles/dark.css", "styles/amoled.css", "styles/summer.css", "styles/crimson.css"];
let styleIterator: number = (document.cookie != "") ? Number(document.cookie[document.cookie.length - 2]) : 0;
options[0].addEventListener("click", () => {
    if (styleIterator == 5) styleIterator = -1;
    style.href = styles[++styleIterator];
    if (document.cookie != "") {
        let date: Date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = \`preferences=\${styleIterator}\${document.cookie[document.cookie.length - 1]}; expires=\${date.toUTCString()}; path=/\`;
    }
    if (allowSounds == 1) new Audio("audio/next.mp3").play();
});
options[1].addEventListener("click", () => {
    if (allowSounds == 1) new Audio("audio/switch.mp3").play();
    if (allowSounds == 0) allowSounds = 1;
    else allowSounds = 0;
    if (document.cookie != "") {
        let date: Date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = \`preferences=\${document.cookie[document.cookie.length - 2]}\${allowSounds}; expires=\${date.toUTCString()}; path=/\`;
    }
});
let main: HTMLDivElement = initialiseDiv("main", "no-border", "transparent");
let sideBar: HTMLDivElement = initialiseDiv("side-bar", "border-standard", "inverse");
let sideBarButtons: HTMLButtonElement[] = [
    initialiseButton("About me", "button-fit", "border-smooth", "transparent", "courier-new", 
        "index.html#about"),
    initialiseButton("Web dev", "button-fit", "border-smooth", "transparent", "courier-new", 
        "index.html#web"),
    initialiseButton("Other languages", "button-fit", "border-smooth", "transparent", "courier-new", 
        "index.html#other"),
    initialiseButton("Contact", "button-fit", "border-smooth", "transparent", "courier-new", 
        "index.html#contact")];
sideBarButtons[0].addEventListener("click", () => {
    if (allowSounds == 1) new Audio("audio/goto.mp3").play();
});
sideBarButtons[1].addEventListener("click", () => {
    if (allowSounds == 1) new Audio("audio/goto.mp3").play();
});
sideBarButtons[2].addEventListener("click", () => {
    if (allowSounds == 1) new Audio("audio/goto.mp3").play();
});
sideBarButtons[3].addEventListener("click", () => {
    if (allowSounds == 1) new Audio("audio/goto.mp3").play();
});
let info: HTMLDivElement = initialiseDiv("info", "border-standard", "inverse");
let infoContent: any[] = [
    initialiseHeader("h3", "About me", "courier-new"),
    initialiseParagraph("Salutations (working on this (and on everything else anyway))", "sans-serif", "about"),
    initialiseDiv("hl", "separator", "font"), 
    initialiseHeader("h3", "Web developer", "courier-new"),
    initialiseParagraph(\`This website was built with TypeScript and CSS.
        I also do WASM, pure HTML, JavaScript and am looking at ASP.NET.\`, "sans-serif", "web"),
    initialiseDiv("hl", "separator", "font"),
    initialiseHeader("h3", "Other languages", "courier-new"),
    initialiseParagraph(\`Only web development made sense as a separate section
        but i also code in these languages:\`, "sans-serif", "other"),
    initialiseList("sans-serif"),
    initialiseParagraph(\`Also SQL if you count that.
        They are kind of arranged in order from most to least favourite\`, "sans-serif"),
    initialiseDiv("hl", "separator", "font"),
    initialiseHeader("h3", "Contact", "courier-new"),
    initialiseParagraph("You can contact me via:", "sans-serif", "contact"),
    initialiseList("sans-serif"),
    initialiseParagraph("Really creative, i know. I respond the quickest on Discord", "sans-serif")];
let listItems1: HTMLLIElement[] = [
    initialiseListItem("C#, and XAML"),
    initialiseListItem("Rust"),
    initialiseListItem("C"),
    initialiseListItem("C++, and Qt"),
    initialiseListItem("Verilog"),
    initialiseListItem("Go"),
    initialiseListItem("Python")];
let listItems2: HTMLLIElement[] = [
    initialiseListItem("Discord:"),
    initialiseListItem("E-mail:"),
    initialiseListItem("BlueSky:"),
    initialiseListItem("Twitter:")];
let footer: HTMLDivElement = initialiseDiv("footer", "no-border", "gradient");

document.body.appendChild(container);
appendChildren(container, [navBar, main, footer]);
appendChildren(navBar, [profilePicture, popup, title, separator]);
popup.appendChild(pictureFull);
appendChildren(navBar, navBarButtons);
appendChildren(navBarButtons[2], select);
appendChildren(select[1], options);
appendChildren(main, [sideBar, info]);
appendChildren(sideBar, sideBarButtons);
appendChildren(info, infoContent);
appendChildren(infoContent[8], listItems1);
appendChildren(infoContent[13], listItems2);

if (document.cookie == "") askForCookies();`, "consolas"),
    initialisePre(`
import {
    initialiseDiv,
    initialiseHeader,
    initialiseIcon,
    appendChildren,
    getStyle
} from "./utilities.js"

function initialisePre(t: string, f: string): HTMLPreElement {
    let pre: HTMLPreElement = document.createElement("pre");
    pre.innerText = t;
    pre.classList.add("paragraph");
    pre.classList.add(f);
    return pre;
}

let siteTitle: HTMLTitleElement = document.createElement("title");
siteTitle.textContent = "Website";
let style: HTMLLinkElement = document.createElement("link");
style.rel = "stylesheet";
style.href = getStyle();
let icon = initialiseIcon("icon.ico");

appendChildren(document.head, [siteTitle, style, icon]);

let cont: HTMLDivElement[] = [
    initialiseDiv("code", "border-code", "code-block"),
    initialiseDiv("code", "border-code", "code-block")];
let headers: HTMLHeadElement[] = [
    initialiseHeader("h3", "index.ts", "courier-new"),    
    initialiseHeader("h3", "code.ts (this page)", "courier-new"),
    initialiseHeader("h3", "dialogbox.ts", "courier-new"),
    initialiseHeader("h3", "utilities.ts (this page)", "courier-new")];
let code: HTMLPreElement[] = [
    initialisePre(\`(main page code code)\`, "consolas"),
    initialisePre(\`(this page's code)\`, "consolas"),
    initialisePre(\`(dialog boxes code)\`, "consolas"),
    initialisePre(\`(functions)\`, "consolas")];

appendChildren(document.body, [headers[0], cont[0], 
    headers[1], cont[1], 
    headers[2], cont[2], 
    headers[3], cont[3]]);
cont[0].appendChild(code[0]);
cont[1].appendChild(code[1]);
`, "consolas"),
    initialisePre(`
import {
    initialiseDiv,
    initialiseParagraph,
    initialiseButton,
    appendChildren
} from "./utilities.js"
import {
    allowSounds
} from "./index.js"

export function askForCookies() {
let body: HTMLDivElement = initialiseDiv("popup-cookies", "border-standard", "inverse");
let opts: HTMLDivElement = initialiseDiv("main", "no-border", "transparent");
let message: HTMLParagraphElement = initialiseParagraph(\`
    "This site uses cookies", and so on. You know the spiel.<br>
    Only used to remember your chosen style and sound effects\`, "sans-serif");
let buttons: HTMLButtonElement[] = [
    initialiseButton("Deny", "button-snug", "border-smooth", "transparent", "courier-new"),
    initialiseButton("Allow", "button-snug", "border-smooth", "transparent", "courier-new")];
buttons[0].addEventListener("click", () => {
    body.classList.add("hide");
    document.cookie = "";
    if (allowSounds == 1) new Audio("audio/accept.mp3").play();
});
buttons[1].addEventListener("click", () => {
    body.classList.add("hide");
    let date: Date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = \`preferences=00; expires=\${date.toUTCString()}; path=/\`;
    if (document.cookie[document.cookie.length - 1] == '1') new Audio("audio/accept.mp3");
});

if (document.cookie == "") {
    document.body.appendChild(body);
    appendChildren(body, [message, opts]);
    appendChildren(opts, buttons);
}
}
export function notify(m: string) {
    let body: HTMLDivElement = initialiseDiv("popup-dialog", "border-standard", "inverse");
    body.addEventListener("click", () => {
        body.classList.add("hide");
    });
    let message: HTMLParagraphElement = initialiseParagraph(m, "sans-serif");

    document.body.appendChild(body);
    body.appendChild(message);
}`, "consolas"),
    initialisePre(`
export function initialiseButton(t: string, l: string, b: string, bg: string, f: string, u?: string): HTMLButtonElement {
    let btn: HTMLButtonElement = document.createElement("button");
    btn.textContent = t;
    btn.classList.add(l);
    btn.classList.add(b);
    btn.classList.add(bg);
    btn.classList.add(f);
    if (u != null) btn.addEventListener("click", () => window.location.href = (u));
    return btn;
}
export function initialiseParagraph(t: string, f: string, i?: string): HTMLParagraphElement {
    let par: HTMLParagraphElement = document.createElement("p");
    if (i != null) par.id = i;
    par.innerHTML = t;
    par.classList.add("paragraph");
    par.classList.add(f);
    return par;
}
export function initialiseDiv(l: string, b: string, bg: string, f?: string): HTMLDivElement {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add(l);
    div.classList.add(b);
    div.classList.add(bg);
    if (f != null ) div.classList.add(f);
    return div;
}
export function initialiseHeader(s: string, t: string, f: string): HTMLHeadingElement {
    let h = document.createElement(s == "h3" ? "h3" : "h1");
    h.textContent = t;
    h.classList.add("p-header");
    h.classList.add(f);
    return h;
}
export function initialiseListItem(t: string): HTMLLIElement {
    let li: HTMLLIElement = document.createElement("li");
    li.innerText = t;
    return li;
}
export function initialiseList(f: string): HTMLUListElement {
    let l: HTMLUListElement = document.createElement("ul");
    l.classList.add("list");
    l.classList.add(f);
    return l;
}
export function initialiseIcon(p: string): HTMLLinkElement {
    let icon: HTMLLinkElement = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/x-icon";
    icon.href = p;
    return icon;
    }
export function appendChildren(e: any, a: any[]): void {
    for (let i = 0; i < a.length; i++) e.appendChild(a[i]);
}
export function getStyle(): string {
    if (document.cookie != "") {
        switch (document.cookie[document.cookie.length - 2]) {
            case '0': return "default.css";
            case '1': return "light.css";
            case '2': return "dark.css";
            case '3': return "amoled.css";
            case '4': return "summer.css";
            case '5': return "crimson.css";
            default: return "default.css";
        }
    }
    else return "default.css";
}
`, "consolas")
];
appendChildren(document.body, [headers[0], cont[0],
    headers[1], cont[1],
    headers[2], cont[2],
    headers[3], cont[3]]);
cont[0].appendChild(code[0]);
cont[1].appendChild(code[1]);
cont[2].appendChild(code[2]);
cont[3].appendChild(code[3]);
