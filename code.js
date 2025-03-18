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
    initialisePre(document.getElementById("index").innerText, "consolas"),
    initialisePre(document.getElementById("code").innerText, "consolas")
];
document.body.appendChild(headers[0]);
document.body.appendChild(cont[0]);
document.body.appendChild(headers[1]);
document.body.appendChild(cont[1]);
cont[0].appendChild(code[0]);
cont[1].appendChild(code[1]);
