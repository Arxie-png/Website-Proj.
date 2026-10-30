// Edit this object to feature a different GitHub project.
const featuredProject = {
  title: "home-page",
  language: "JavaScript, html, css",
  description:
    "Show fitness information from a Fitbit Air on a home-screen-style page in the browser.. It keeps local records, identifies known and possible ad servers, tracks cookie changes, and supports exporting Adblock-compatible filters.",
  highlights: [
    "Uses the google health api to get health data.",
    "Acts as a homepage that has access to shortcuts.",
    "Configurable background and styles.",
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
