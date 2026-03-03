(function () {
  "use strict";

  function clearMessages(errorContainer, successContainer) {
    errorContainer.innerHTML = "";
    successContainer.innerHTML = "";
  }

  function showError(container, message) {
    const p = document.createElement("p");
    p.textContent = message;
    container.appendChild(p);
  }

  function showSuccess(container, message) {
    const p = document.createElement("p");
    p.textContent = message;
    container.appendChild(p);
  }

  function initForm() {
    const form = document.querySelector(".terminal-form");
    const errorContainer = document.querySelector(".error-message");
    const successContainer = document.querySelector(".success-message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      clearMessages(errorContainer, successContainer);

      const fullName = document.getElementById("full-name").value.trim();
      const phone = document.getElementById("phone-number").value.trim();
      const email = document.getElementById("email").value.trim();
      const comments = document.getElementById("comments").value.trim();
      const contactPreference = document.querySelector(
        'input[name="contactPreference"]:checked',
      )?.value;

      let isValid = true;

      if (!fullName) {
        showError(errorContainer, "Error: Name is required.");
        isValid = false;
      }

      if (!comments) {
        showError(errorContainer, "Error: Comments are required.");
        isValid = false;
      }

      if (!contactPreference) {
        showError(errorContainer, "Error: Please select a contact preference.");
        isValid = false;
      }

      const phoneRegex = /^\d{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (contactPreference === "Phone") {
        if (!phoneRegex.test(phone)) {
          showError(
            errorContainer,
            "Error: Enter a valid 10 digit phone number.",
          );
          isValid = false;
        }
      }

      if (contactPreference === "Email") {
        if (!emailRegex.test(email)) {
          showError(errorContainer, "Error: Enter a valid email address.");
          isValid = false;
        }
      }

      if (!isValid) return;

      const customer = {
        name: fullName,
        phone: phone,
        email: email,
        comments: comments,
        preferredContact: contactPreference,
        submittedAt: new Date().toISOString(),
      };

      showSuccess(
        successContainer,
        `Thanks, ${customer.name}. We will contact you via ${customer.preferredContact}.`,
      );

      form.reset();
    });
  }

  window.initForm = initForm;
})();
