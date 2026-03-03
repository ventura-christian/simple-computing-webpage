(function () {
  "use strict";

  function clearMessages(errorContainer, successContainer) {
    errorContainer.innerHTML = "";
    successContainer.innerHTML = "";
  }

  function showError(container, message) {
    const p = document.createElement("p");
    p.textContent = message;
    p.style.color = "red";
    container.appendChild(p);
  }

  function showSuccess(container, message) {
    const p = document.createElement("p");
    p.textContent = message;
    p.style.color = "lime";
    container.appendChild(p);
  }

  function initForm() {
    const form = document.querySelector(".terminal-form");
    const errorContainer = document.querySelector(".error-message");
    const successContainer = document.querySelector(".success-message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearMessages(errorContainer, successContainer);
      console.log("Form submitted");
    });
  }

  window.initForm = initForm;
})();
