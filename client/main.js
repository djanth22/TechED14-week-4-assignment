console.log("test");

// form handler and listener
const feedbackForm = document.getElementById("form");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  fetch(`http://localhost:8080/newFeedback`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

feedbackForm.addEventListener("submit", handleSubmit);

// attempting to get the database rendered on screen by creating elements
// testing imported stuff from other js on server to use for getting the server information
// will need a foreach loop here somewhere

const feedbackContainer = document.getElementById(`feedback-container`);

async function database() {
  const dbData = await fetch(`http://localhost:8080/feedback`);
  const table = await dbData.json();
  console.log(table);
}

database();
