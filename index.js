import { initialiseButton, initialiseDiv, initialiseHeader, initialiseList, initialiseListItem, initialiseParagraph, initialiseIcon, appendChildren, getStyle, } from "./utilities.js";
let siteTitle = document.createElement("title");
siteTitle.textContent = "Website";
let style = document.createElement("link");
style.rel = "stylesheet";
style.href = getStyle();
let icon = initialiseIcon("icon.ico");
appendChildren(document.head, [siteTitle, style, icon]);
let allowSounds = (document.cookie != "") ? Number(document.cookie[document.cookie.length - 1]) : 0;
let sounds = [
    new Audio("audio/echo.mp3"),
    new Audio("audio/expand.mp3"),
    new Audio("audio/retract.mp3"),
    new Audio("audio/switch.mp3"),
    new Audio("audio/next.mp3"),
    new Audio("audio/goto.mp3")
];
let container = initialiseDiv("container", "no-border", "transparent");
let navBar = initialiseDiv("bar", "border-standard", "gradient", "sans-serif");
let popup = initialiseDiv("popup", "border-standard", "gradient");
popup.classList.add("hidden");
let pictureFull = document.createElement("img");
pictureFull.src = "wolf_TNO.png";
pictureFull.classList.add("picture-full");
let profilePicture = document.createElement("img");
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
    if (document.cookie[document.cookie.length - 1] == '1')
        sounds[3].play();
});
profilePicture.addEventListener("mouseenter", () => {
    popup.classList.replace("hidden", "show");
});
profilePicture.addEventListener("mouseleave", () => {
    popup.classList.replace("show", "hidden");
});
let title = initialiseHeader("h1", "Player532210", "courier-new");
let separator = initialiseDiv("vl", "separator", "font");
let navBarButtons = [
    initialiseButton("Source code", "button-snug", "border-smooth", "transparent", "courier-new", "source.html"),
    initialiseButton("Inert button", "button-snug", "border-smooth", "transparent", "courier-new"),
    initialiseDiv("select", "no-border", "transparent")
];
navBarButtons[0].addEventListener("click", () => {
    if (document.cookie[document.cookie.length - 1] == '1' || allowSounds == 1)
        sounds[0].play();
});
let select = [
    initialiseButton("Site settings", "button-snug", "border-smooth", "transparent", "courier-new"),
    initialiseDiv("collapsable", "border-standard", "inverse")
];
select[0].addEventListener("click", () => {
    if (select[1].classList.contains("hidden")) {
        select[1].classList.replace("hidden", "show");
        if (document.cookie[document.cookie.length - 1] == '1' || allowSounds == 1)
            sounds[2].play();
    }
    else if (select[1].classList.contains("show")) {
        select[1].classList.replace("show", "hidden");
        if (document.cookie[document.cookie.length - 1] == '1' || allowSounds == 1)
            sounds[1].play();
    }
});
select[1].classList.add("hidden");
let options = [
    initialiseButton("Theme", "button-wide", "border-code", "transparent", "courier-new"),
    initialiseButton("Enable sounds", "button-wide", "border-code", "transparent", "courier-new")
];
let styles = ["styles/default.css", "styles/light.css", "styles/dark.css", "styles/amoled.css", "styles/summer.css", "styles/crimson.css"];
let styleIterator = (document.cookie != "") ? Number(document.cookie[document.cookie.length - 2]) : 0;
options[0].addEventListener("click", () => {
    if (styleIterator == 5)
        styleIterator = -1;
    style.href = styles[++styleIterator];
    if (document.cookie != "") {
        let date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = `preferences=${styleIterator}${document.cookie[document.cookie.length - 1]}; expires=${date.toUTCString()}; path=/`;
    }
    if (document.cookie[document.cookie.length - 1] == '1' || allowSounds == 1)
        sounds[4].play();
});
options[1].addEventListener("click", () => {
    if (allowSounds == 0)
        allowSounds = 1;
    else
        allowSounds = 0;
    if (document.cookie != "") {
        let date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = `preferences=${document.cookie[document.cookie.length - 2]}${allowSounds}; expires=${date.toUTCString()}; path=/`;
    }
    if (document.cookie[document.cookie.length - 1] == '1' || allowSounds == 1)
        sounds[3].play();
});
let main = initialiseDiv("main", "no-border", "transparent");
let sideBar = initialiseDiv("side-bar", "border-standard", "inverse");
let sideBarButtons = [
    initialiseButton("About me", "button-fit", "border-smooth", "transparent", "courier-new", "index.html#about"),
    initialiseButton("Web dev", "button-fit", "border-smooth", "transparent", "courier-new", "index.html#web"),
    initialiseButton("Other languages", "button-fit", "border-smooth", "transparent", "courier-new", "index.html#other"),
    initialiseButton("Contact", "button-fit", "border-smooth", "transparent", "courier-new", "index.html#contact")
];
sideBarButtons[0].addEventListener("click", () => {
    if (document.cookie[document.cookie.length - 1] == '1' || allowSounds == 1)
        sounds[5].play();
});
sideBarButtons[1].addEventListener("click", () => {
    if (document.cookie[document.cookie.length - 1] == '1' || allowSounds == 1)
        sounds[5].play();
});
sideBarButtons[2].addEventListener("click", () => {
    if (document.cookie[document.cookie.length - 1] == '1' || allowSounds == 1)
        sounds[5].play();
});
sideBarButtons[3].addEventListener("click", () => {
    if (document.cookie[document.cookie.length - 1] == '1' || allowSounds == 1)
        sounds[5].play();
});
let info = initialiseDiv("info", "border-standard", "inverse");
let infoContent = [
    initialiseHeader("h3", "About me", "courier-new"),
    initialiseParagraph("Salutations (working on this (and on everything else anyway))", "sans-serif", "about"),
    initialiseDiv("hl", "separator", "font"),
    initialiseHeader("h3", "Web developer", "courier-new"),
    initialiseParagraph(`This website was built with TypeScript and CSS.
        I also do WASM, pure HTML, JavaScript and am looking at ASP.NET.`, "sans-serif", "web"),
    initialiseDiv("hl", "separator", "font"),
    initialiseHeader("h3", "Other languages", "courier-new"),
    initialiseParagraph(`Only web development made sense as a separate section
        but i also code in these languages:`, "sans-serif", "other"),
    initialiseList("sans-serif"),
    initialiseParagraph(`Also SQL if you count that.
        They are kind of arranged in order from most to least favourite`, "sans-serif"),
    initialiseDiv("hl", "separator", "font"),
    initialiseHeader("h3", "Contact", "courier-new"),
    initialiseParagraph("You can contact me via:", "sans-serif", "contact"),
    initialiseList("sans-serif"),
    initialiseParagraph("Really creative, i know. I respond the quickest on Discord", "sans-serif")
];
let listItems1 = [
    initialiseListItem("C#, and XAML"),
    initialiseListItem("Rust"),
    initialiseListItem("C"),
    initialiseListItem("C++, and Qt"),
    initialiseListItem("Verilog"),
    initialiseListItem("Go"),
    initialiseListItem("Python")
];
/*let listItems2: HTMLLIElement[] = [
    initialiseListItem("Discord: @player532210"),
    initialiseListItem("E-mail: player532210@gmail.com"),
    initialiseListItem("BlueSky: @player532210.bsky.app"),
    initialiseListItem("Twitter: @Player532210")];*/
let listItems2 = [
    initialiseListItem("Discord:"),
    initialiseListItem("E-mail:"),
    initialiseListItem("BlueSky:"),
    initialiseListItem("Twitter:")
];
let footer = initialiseDiv("footer", "no-border", "gradient");
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
