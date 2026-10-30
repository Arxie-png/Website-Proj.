// Edit this object to feature a different GitHub project.
const featuredProject = {
  title: "home-page",
  language: "JavaScript, html, css",
  description:
    "A home-screen-style web page that displays fitness information from a Fitbit Air and provides quick access to useful shortcuts.",
  highlights: [
    "Uses the Google Health API to retrieve fitness data.",
    "Provides a customizable browser homepage with shortcuts.",
    "Supports configurable backgrounds and styles.",
  ],
  url: "https://github.com/Arxie-png/home-page",
};

const projectTitle = document.querySelector("#project-title");
const projectLanguage = document.querySelector("#project-language");
const projectDescription = document.querySelector("#project-description");
const projectHighlights = document.querySelector("#project-highlights");
const projectLink = document.querySelector("#project-link");

projectTitle.textContent = featuredProject.title;
projectLanguage.textContent = featuredProject.language;
projectDescription.textContent = featuredProject.description;
projectLink.href = featuredProject.url;

featuredProject.highlights.forEach((highlight) => {
  const listItem = document.createElement("li");
  listItem.textContent = highlight;
  projectHighlights.appendChild(listItem);
});
