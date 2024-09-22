console.log("test");

const feedbackForm = document.getElementById("form");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  fetch(`https://teched14-week-4-assignment.onrender.com/newFeedback`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

feedbackForm.addEventListener("submit", handleSubmit);

const feedbackContainer = document.getElementById(`feedback-container`);

async function database() {
  const dbData = await fetch(
    `https://teched14-week-4-assignment.onrender.com/feedback`
  );
  const table = await dbData.json();
  console.log(table);
  const tableRev = table.reverse();
  console.log(tableRev);

  tableRev.forEach(function (a) {
    const container = document.createElement("section");
    container.classList.add(`section`);
    const name = document.createElement("p");
    name.classList.add(`info`);
    const location = document.createElement("p");
    location.classList.add(`info`);
    const findUs = document.createElement("p");
    findUs.classList.add(`info`);
    const thoughts = document.createElement("p");
    thoughts.classList.add(`info`);

    name.textContent = "name: " + a.name;
    location.textContent = "location: " + a.location;
    findUs.textContent = "how you found us: " + a.how_did_you_find_us;
    thoughts.textContent = "your thoughts: " + a.your_thoughts;

    container.appendChild(name);
    container.appendChild(location);
    container.appendChild(findUs);
    container.appendChild(thoughts);

    feedbackContainer.appendChild(container);
  });
}

database();
