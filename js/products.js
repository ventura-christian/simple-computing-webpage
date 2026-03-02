// Properly implemented IIFE
(function () {
  "use strict";

  function initProducts() {
    console.log("Products module initialized");
  }

  window.initProducts = initProducts;
})();


// Intentionally broken IIFE to see what the outcome is when I attempt to load the page.
// function ()
// ( {
// "use strict";

//   function initProducts() {
//     console.log("Products module initialized");
//   }

//   window.initProducts = initProducts;
// })();
