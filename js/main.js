const guestForm = document.getElementById("guest-form");

guestForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Set button to loading mode
  const submitButton = document.getElementById("submit-button");
  submitButton.innerHTML = "LOADING...";
  submitButton.disabled = true;

  const firstName = document
    .getElementById("guest-form-first-name")
    .value.toUpperCase();
  const lastName = document
    .getElementById("guest-form-last-name")
    .value.toUpperCase();
  const email = document.getElementById("guest-form-email").value;

  fetch("/services/printInvitation.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
    }),
  })
    .then((response) => response.text())
    .then((filePath) => {
      submitButton.innerHTML = "ENTER";
      submitButton.disabled = false;
      window.location.href = filePath;
    });
});
