import React from "react";
const allProjects = [
  {
    name: "Missy's Designs",
    siteLink: "link",
    gitLink: "https://github.com/jimmykehs/MissysDesigns",
    desc: "<p>An ecommerce site for buying tumbler care cards.<br>This site gives the user a great shopping experience without the need of creating an account. Payments are handled via third party to ensure secure transactions and order tracking links are sent via email.<br><br>The following APIs were used for this project:</p><ul><li>SendGrid - Sending Email</li><li>Paypal - Processing Transactions</li></ul>",
    imgSrc: "",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "React",
      "PSQL",
      "Sass",
      "APIs",
    ],
  },
  {
    name: "The Art Collector",
    siteLink: "https://harvardartsearch13.netlify.app/",
    gitLink: "https://github.com/jimmykehs/Art_Collector",
    desc: "<p>A search engine for the Harvard Art Museum. This project utilizes the Harvard Art API to display search results to the user. Searches can be split up by classification, century, culture, technique, and medium.</p>",
    imgSrc: "./Images/ArtCollector.png",
    techStack: ["HTML", "CSS", "JavaScript", "React", "APIs"],
  },
  {
    name: "Project Name",
    siteLink: "link",
    gitLink: "link",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imgSrc: "",
    techStack: ["HTML", "CSS", "JavaScript", "NodeJS", "React", "PSQL", "Sass"],
  },
];
const Projects = () => {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="all-projects">
        {allProjects.map((project) => {
          return (
            <div className="project-card">
              <div className="project-img-details-container">
                <img src={project.imgSrc} />
                <div className="project-details">
                  <h3>{project.name}</h3>
                  <div className="project-links">
                    <a href={project.siteLink}>Visit Site</a> ||{" "}
                    <a href={project.gitLink}>Github</a>
                  </div>
                  <div
                    className="project-desc"
                    dangerouslySetInnerHTML={{ __html: project.desc }}
                  ></div>
                  <div className="project-stack">
                    {project.techStack.map((tech) => {
                      return <p className={`tech-stack-p ${tech}`}>{tech}</p>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
