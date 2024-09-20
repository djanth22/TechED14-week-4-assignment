console.log("test");

const feedbackForm = document.getElementById("form");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  fetch("https://teched14-week-4-assignment.onrender.com/form", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ formValues }),
  });
}

feedbackForm.addEventListener("submit", handleSubmit);
