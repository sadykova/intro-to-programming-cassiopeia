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
