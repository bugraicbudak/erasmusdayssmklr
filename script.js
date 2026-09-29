const btn = document.getElementById("langBtn");
let lang = "tr";

function setLanguage(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-tr]").forEach(el => {
    const value = el.getAttribute("data-" + lang);
    if (value !== null) el.innerHTML = value;
  });
  btn.textContent = lang === "tr" ? "EN" : "TR";
}
btn.addEventListener("click", () => setLanguage(lang === "tr" ? "en" : "tr"));
