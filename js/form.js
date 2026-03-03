(function () {
  "use strict";

  function initForm() {
    const form = document.querySelector(".terminal-form");
    const errorContainer = document.querySelector(".error-message");
    const successContainer = document.querySelector(".success-message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Form submitted");
    });
  }

  window.initForm = initForm;
})();
