import throttle from 'lodash.throttle';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".feedback-form");
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const formData = { email: "", message: "" };

  const saveAndLogData = () => {
    formData.email = emailInput.value;
    formData.message = messageInput.value;
    console.log("Form data:", formData);
  };
  const throttledSaveAndLogData = throttle(saveAndLogData, 500);

  emailInput.addEventListener("input", throttledSaveAndLogData);
  messageInput.addEventListener("input", throttledSaveAndLogData);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);

    emailInput.value = "";
    messageInput.value = "";
    formData.email = "";
    formData.message = "";

    localStorage.removeItem("feedback-form-state");
  });
});
