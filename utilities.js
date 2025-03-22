export function initialiseButton(t, l, b, bg, f, u) {
    let btn = document.createElement("button");
    btn.textContent = t;
    btn.classList.add(l);
    btn.classList.add(b);
    btn.classList.add(bg);
    btn.classList.add(f);
    if (u != null)
        btn.addEventListener("click", () => window.location.href = (u));
    return btn;
}
export function initialiseParagraph(t, f, i) {
    let par = document.createElement("p");
    if (i != null)
        par.id = i;
    par.innerHTML = t;
    par.classList.add("paragraph");
    par.classList.add(f);
    return par;
}
export function initialiseDiv(l, b, bg, f) {
    let div = document.createElement("div");
    div.classList.add(l);
    div.classList.add(b);
    div.classList.add(bg);
    if (f != null)
        div.classList.add(f);
    return div;
}
export function initialiseHeader(s, t, f) {
    let h = document.createElement(s == "h3" ? "h3" : "h1");
    h.textContent = t;
    h.classList.add("p-header");
    h.classList.add(f);
    return h;
}
export function initialiseListItem(t) {
    let li = document.createElement("li");
    li.innerText = t;
    return li;
}
export function initialiseList(f) {
    let l = document.createElement("ul");
    l.classList.add("list");
    l.classList.add(f);
    return l;
}
export function initialiseIcon(p) {
    let icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/x-icon";
    icon.href = p;
    return icon;
}
export function appendChildren(e, a) {
    for (let i = 0; i < a.length; i++)
        e.appendChild(a[i]);
}
export function getStyle() {
    if (document.cookie != "") {
        switch (document.cookie[document.cookie.length - 2]) {
            case '0': return "styles/default.css";
            case '1': return "styles/light.css";
            case '2': return "styles/dark.css";
            case '3': return "styles/amoled.css";
            case '4': return "styles/summer.css";
            case '5': return "styles/crimson.css";
            default: return "styles/default.css";
        }
    }
    else
        return "styles/default.css";
}
