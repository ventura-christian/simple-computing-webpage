// (function () {
//   "use strict";

//   function initApp() {
//     initProducts();
//     initGame();
//     initForm();
//     console.log("Application boot complete");
//   }

//   document.addEventListener("DOMContentLoaded", initApp);
// })();

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  if (window.initProducts) {
    window.initProducts();
  }
});