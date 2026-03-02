(function () {
  "use strict";

  function initApp() {
    initProducts();
    initGame();
    initForm();
    console.log("Application boot complete");
  }

  document.addEventListener("DOMContentLoaded", initApp);
})();
