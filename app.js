const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
const key = "p_theme";

function setTheme(theme){
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(key, theme);
    themeBtn.textContent = theme === "light" ? "Dark" : "Light";
}

const saved = localStorage.getItem(key);
setTheme(saved || "dark");

themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
});