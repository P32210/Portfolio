"use strict";
function initialisePre(t, f) {
    let pre = document.createElement("pre");
    pre.innerText = t;
    pre.classList.add("paragraph");
    pre.classList.add(f);
    return pre;
}
function initialiseSection(l, b, bg, f) {
    let div = document.createElement("div");
    div.classList.add(l);
    div.classList.add(b);
    div.classList.add(bg);
    if (f != null)
        div.classList.add(f);
    return div;
}
function initialiseHeading(s, t, f) {
    let h = document.createElement(s == "h3" ? "h3" : "h1");
    h.textContent = t;
    h.classList.add("p-header");
    h.classList.add(f);
    return h;
}
let codeTitle = document.createElement("title");
codeTitle.textContent = "Website";
let codeStyle = document.createElement("link");
codeStyle.rel = "stylesheet";
codeStyle.href = "style.css";
document.head.appendChild(codeTitle);
document.head.appendChild(codeStyle);
let cont = [
    initialiseSection("code", "border-code", "code-block"),
    initialiseSection("code", "border-code", "code-block")
];
let headers = [
    initialiseHeading("h3", "index.html", "courier-new"),
    initialiseHeading("h3", "source.html", "courier-new")
];
let code = [
    initialisePre(`
function initialiseButton(t: string, l: string, b: string, bg: string, f: string, u?: string): HTMLButtonElement {
    let btn: HTMLButtonElement = document.createElement("button");
    btn.textContent = t;
    btn.classList.add(l);
    btn.classList.add(b);
    btn.classList.add(bg);
    btn.classList.add(f);
    if (u != null) btn.addEventListener("click", () => window.location.href = (u));
    return btn;
}
function initialiseParagraph(t: string, f: string, i?: string): HTMLParagraphElement {
    let par: HTMLParagraphElement = document.createElement("p");
    if (i != null) par.id = i;
    par.innerHTML = t;
    par.classList.add("paragraph");
    par.classList.add(f);
    return par;
}
function initialiseDiv(l: string, b: string, bg: string, f?: string): HTMLDivElement {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add(l);
    div.classList.add(b);
    div.classList.add(bg);
    if (f != null ) div.classList.add(f);
    return div;
}
function initialiseHeader(s: string, t: string, f: string): HTMLHeadingElement {
    let h = document.createElement(s == "h3" ? "h3" : "h1");
    h.textContent = t;
    h.classList.add("p-header");
    h.classList.add(f);
    return h;
}
function initialiseListItem(t: string): HTMLLIElement {
    let li: HTMLLIElement = document.createElement("li");
    li.innerText = t;
    return li;
}
function initialiseList(f: string): HTMLUListElement {
    let l: HTMLUListElement = document.createElement("ul");
    l.classList.add("list");
    l.classList.add(f);
    return l;
}
function appendChildren(e: any, a: Array<any>): void {
    for (let i = 0; i < a.length; i++) e.appendChild(a[i]);
}

let siteTitle: HTMLTitleElement = document.createElement("title");
siteTitle.textContent = "Website";
let style: HTMLLinkElement = document.createElement("link");
style.rel = "stylesheet";
style.href = "style.css";

document.head.appendChild(siteTitle);
document.head.appendChild(style);

let container: HTMLDivElement = initialiseDiv("container", "no-border", "transparent");
let navBar: HTMLDivElement = initialiseDiv("bar", "border-standard", "gradient", "sans-serif");
let popup: HTMLDivElement = initialiseDiv("popup", "border-standard", "gradient");
popup.classList.add("hide");
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
});
profilePicture.addEventListener("mouseenter", () => {
    popup.classList.replace("hide", "show");
});
profilePicture.addEventListener("mouseleave", () => {
    popup.classList.replace("show", "hide");
});
let title: HTMLHeadingElement = initialiseHeader("h1", "Player532210", "courier-new");
let separator: HTMLDivElement = initialiseDiv("vl", "separator", "font")
let navBarButtons: HTMLButtonElement[] = [
    initialiseButton("Source code", "button-snug", "border-smooth", "transparent", "courier-new", "source.html"),
    initialiseButton("Inert Button", "button-snug", "border-smooth", "transparent", "courier-new"),
    initialiseButton("Decorational Button", "button-snug", "border-smooth", "transparent", "courier-new")];
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
appendChildren(main, [sideBar, info]);
appendChildren(sideBar, sideBarButtons);
appendChildren(info, infoContent);
appendChildren(infoContent[8], listItems1);
appendChildren(infoContent[13], listItems2);`, "consolas"),
    initialisePre(`
function initialisePre(t: string, f: string): HTMLPreElement {
    let pre: HTMLPreElement = document.createElement("pre");
    pre.innerText = t;
    pre.classList.add("paragraph");
    pre.classList.add(f);
    return pre;
}
function initialiseSection(l: string, b: string, bg: string, f?: string): HTMLDivElement {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add(l);
    div.classList.add(b);
    div.classList.add(bg);
    if (f != null ) div.classList.add(f);
    return div;
}
function initialiseHeading(s: string, t: string, f: string): HTMLHeadingElement {
    let h = document.createElement(s == "h3" ? "h3" : "h1");
    h.textContent = t;
    h.classList.add("p-header");
    h.classList.add(f);
    return h;
}

let codeTitle: HTMLTitleElement = document.createElement("title");
codeTitle.textContent = "Website";
let codeStyle: HTMLLinkElement = document.createElement("link");
codeStyle.rel = "stylesheet";
codeStyle.href = "style.css";

document.head.appendChild(codeTitle);
document.head.appendChild(codeStyle);

let cont: HTMLDivElement[] = [
    initialiseSection("code", "border-code", "code-block"),
    initialiseSection("code", "border-code", "code-block")];
let headers: HTMLHeadElement[] = [
    initialiseHeading("h3", "index.html", "courier-new"),
    initialiseHeading("h3", "source.html", "courier-new")];
let code: HTMLPreElement[] = [
    initialisePre(\`(code of the first page)\`, "consolas"),
    initialisePre(\`(code of this page)\`, "consolas")];
    
document.body.appendChild(headers[0]);
document.body.appendChild(cont[0]);
document.body.appendChild(headers[1]);
document.body.appendChild(cont[1]);
cont[0].appendChild(code[0]);
cont[1].appendChild(code[1]);`, "consolas")
];
document.body.appendChild(headers[0]);
document.body.appendChild(cont[0]);
document.body.appendChild(headers[1]);
document.body.appendChild(cont[1]);
cont[0].appendChild(code[0]);
cont[1].appendChild(code[1]);
