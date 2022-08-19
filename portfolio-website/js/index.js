// Add footer with name and year

let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Almira SD, ${thisYear}`;
footer.appendChild(copyright);

// Add skills section
// general skills
const gskills = [
  "Research",
  "Data Cleaning",
  "Querying and Managing Data",
  "Data Visualization",
  "Data Geocoding",
  "Machine Learning",
  "Statistical Analysis",
];

const gskillsSection = document.getElementById("gen-skills");
const gskillsList = gskillsSection.querySelector("ul");

for (let i = 0; i < gskills.length; i++) {
  const gskill = document.createElement("li");
  gskill.textContent = gskills[i];
  gskillsList.appendChild(gskill);
}

//technical skills

const techskills = [
  "Python(NumPy, Pandas, Matplotlib, Seaborn, Scikit - learn, SpaCy, NLTK)",
  "R (tidyr, dplyr, ggplot2, leaflet,shiny, caret)",
  "STATA",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "LaTeX",
];

const tskillsSection = document.getElementById("tech-skills");
const tskillsList = tskillsSection.querySelector("ul");

for (let i = 0; i < techskills.length; i++) {
  const tskill = document.createElement("li");
  tskill.textContent = techskills[i];
  tskillsList.appendChild(tskill);
}

// language skills

const langskills = [
  "English (Fluent)",
  "Kazakh (Native)",
  "Russian (Native level proficiency)",
  "Turkish (Fluent)",
  "Arabic (Beginner)",
];

const lskillsSection = document.getElementById("lang-skills");
const lskillsList = lskillsSection.querySelector("ul");

for (let i = 0; i < langskills.length; i++) {
  const lskill = document.createElement("li");
  lskill.textContent = langskills[i];
  lskillsList.appendChild(lskill);
}

//Handle Message from Submit

const messageForm = document.getElementsByName("leave_message");

// function printUserMessage(event) {
//   event.preventDefault();
//   let userName = event.target.firstName.value; //how do I select first-name
//   let userEmail = event.target.email.value;
//   let userMessage = event.target.message.value;
//   console.log(userName, userEmail, userMessage);
//   messageForm.reset() how to reset a form inside the function?
// }

for (let i = 0; i < messageForm.length; i++) {
  messageForm[0].addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = event.target.firstName.value;
    let lastName = event.target.lastName.value;
    let userEmail = event.target.email.value;
    let userMessage = event.target.message.value;
    console.log(firstName, lastName, userEmail, userMessage);
    // Display Message List
    const messageSection = document.getElementById("messages");

    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href='mailto:${userEmail}'>${firstName} ${lastName}</a> posted <span class='strong'>"${userMessage}"</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", function (event) {
      const entry = removeButton.parentNode;
      // remove element
      entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm[i].reset();
  });
}
