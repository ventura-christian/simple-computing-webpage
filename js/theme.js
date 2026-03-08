(function () {
  "use strict";

  function initTheme() {
    const toggleBtn = document.getElementById("theme-toggle");

    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  }

  window.initTheme = initTheme;
})();
