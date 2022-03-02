import React from "react";

const allSkills = [
  { name: "HTML5", imgSrc: "./Images/Icons/HTML.png" },
  { name: "CSS3", imgSrc: "./Images/Icons/CSS.png" },
  { name: "JavaScript", imgSrc: "./Images/Icons/JS.png" },
  { name: "React", imgSrc: "./Images/Icons/react.png" },
  { name: "Node.js", imgSrc: "./Images/Icons/nodejs.png" },
  { name: "PostgreSQL", imgSrc: "./Images/Icons/PSQL.png" },
  { name: "REST APIs", imgSrc: "./Images/Icons/API.png" },
  { name: "Sass", imgSrc: "./Images/Icons/sass.png" },
];

const Skills = () => {
  return (
    <div id="skills">
      <h2>My Skills</h2>
      <div id="all-skills">
        {allSkills.map((skill, index) => {
          return (
            <div className={`skill-card`}>
              <img src={skill.imgSrc} />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
