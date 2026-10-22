(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById("theme-toggle");
  var langBtn = document.getElementById("lang-toggle");
  var langLabel = document.getElementById("lang-label");

  var titles = {
    es: "Adrián Ramos Márquez · Desarrollador Full Stack",
    en: "Adrián Ramos Márquez · Full Stack Developer"
  };

  function theme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function lang() {
    return root.getAttribute("data-lang") === "en" ? "en" : "es";
  }

  function paintTheme() {
    themeBtn.setAttribute("aria-label", theme() === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro");
    var images = document.querySelectorAll("img[data-light][data-dark]");
    for (var i = 0; i < images.length; i++) {
      var src = images[i].getAttribute(theme() === "light" ? "data-light" : "data-dark");
      if (src && images[i].getAttribute("src") !== src) {
        images[i].setAttribute("src", src);
      }
    }
  }

  function paintLang() {
    var current = lang();
    root.setAttribute("lang", current);
    langLabel.textContent = current.toUpperCase();
    var switchTo = current === "es" ? "Switch to English" : "Cambiar a español";
    langBtn.setAttribute("aria-label", switchTo);
    langBtn.title = switchTo;
    themeBtn.title = theme() === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro";
    document.title = titles[current];
  }

  themeBtn.addEventListener("click", function () {
    var next = theme() === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    paintTheme();
    paintLang();
  });

  langBtn.addEventListener("click", function () {
    var next = lang() === "es" ? "en" : "es";
    root.setAttribute("data-lang", next);
    localStorage.setItem("lang", next);
    paintLang();
  });

  paintTheme();
  paintLang();
})();
