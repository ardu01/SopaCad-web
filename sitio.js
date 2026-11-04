(function () {
  var raiz = document.documentElement;
  var btn = document.getElementById("tema");
  var meta = document.querySelector('meta[name="theme-color"]');

  function oscuroAhora() {
    return raiz.getAttribute("data-tema") === "oscuro";
  }

  function pintar(oscuro) {
    if (oscuro) raiz.setAttribute("data-tema", "oscuro");
    else raiz.removeAttribute("data-tema");
    if (btn) {
      btn.setAttribute("aria-pressed", oscuro ? "true" : "false");
      btn.textContent = oscuro ? "Tema claro" : "Tema oscuro";
    }
    if (meta) meta.setAttribute("content", oscuro ? "#10141a" : "#f4f6f8");
  }

  pintar(oscuroAhora());

  if (btn) {
    btn.addEventListener("click", function () {
      var siguiente = !oscuroAhora();
      try {
        localStorage.setItem("tema", siguiente ? "oscuro" : "claro");
      } catch (e) {}
      pintar(siguiente);
    });
  }
})();
