// Edit this object to feature a different GitHub project.
const featuredProject = {
  title: "Ad Request Watcher",
  language: "JavaScript",
  description:
    "A privacy-first Chrome Manifest V3 extension that watches for ad-server requests and helps users understand activity from the pages they visit. It keeps local records, identifies known and possible ad servers, tracks cookie changes, and supports exporting Adblock-compatible filters.",
  highlights: [
    "Uses webRequest to observe and classify network activity.",
    "Keeps captured activity local instead of transmitting it elsewhere.",
    "Includes charts, custom domain lists, and recent activity views.",
  ],
  url: "https://github.com/Arxie-png/tracker-tracker",
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
