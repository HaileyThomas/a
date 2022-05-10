import React, { useState } from "react";
import Project from "../Project";

import pythonboards from "../../assets/images/projectimages/pythonboards.png";
import pokedex from "../../assets/images/projectimages/pokedex.png";
import toclarify from "../../assets/images/projectimages/toclarify.png";
import numerology from "../../assets/images/projectimages/numerology.png";
import portfoliov2 from "../../assets/images/projectimages/portfoliov2.png";
import booksearch from "../../assets/images/projectimages/booksearch.png";
import bookclub from "../../assets/images/projectimages/bookclub.png";
import techblog from "../../assets/images/projectimages/techblog.png";
import readmegen from "../../assets/images/projectimages/readmegen.png";
import portfoliogen from "../../assets/images/projectimages/portfoliogen.png";
import monster from "../../assets/images/projectimages/monster.png";
import notetaker from "../../assets/images/projectimages/notetaker.png";
import teamgen from "../../assets/images/projectimages/teamgen.png";
import bookormovie from "../../assets/images/projectimages/bookormovie.png";
import weather from "../../assets/images/projectimages/weather.png";
import workday from "../../assets/images/projectimages/workday.png";
import regform from "../../assets/images/projectimages/regform.png";
import codingquiz from "../../assets/images/projectimages/codingquiz.png";
import portfoliov1 from "../../assets/images/projectimages/portfoliov1.png";
import passwordgen from "../../assets/images/projectimages/passwordgen.png";
import robotglad from "../../assets/images/projectimages/robotglad.png";
import catdressup from "../../assets/images/projectimages/catdressup.png";
import plumbob from "../../assets/images/projectimages/plumbob.png";

function ProjectList({ category }) {
  const [projects] = useState([
    {
      name: "React Pokedex",
      category: "front-end",
      description:
        "Pokedex web application created with React.js, PokeAPI and vanilla CSS.",
      github: "https://github.com/HaileyThomas/react-pokedex",
      link: "https://haileythomas.github.io/react-pokedex/",
      image: pokedex,
    },
    {
      name: "To Clarify",
      category: "full-stack",
      description:
        "Full stack MERN task managment application styled with Bootstrap and powered by React.js, Apollo GraphQL, MongoDB and Mongoose.",
      github: "https://github.com/HaileyThomas/ToClarify",
      link: "http://toclarifyapp.herokuapp.com/",
      image: toclarify,
    },
    {
      name: "Python Boards",
      category: "full-stack",
      description:
        "Message board CRUD application powered by Python, Flask and SQLAlchemy.",
      github: "https://github.com/HaileyThomas/python-boards",
      link: "https://python-boards.herokuapp.com/",
      image: pythonboards,
    },
    {
      name: "Numerology Table Generator",
      category: "front-end",
      description:
        "Javascript table generator for numerology styled with Bootstrap.",
      github: "https://github.com/HaileyThomas/numerology",
      link: "https://haileythomas.github.io/numerology/",
      image: numerology,
    },
    {
      name: "Portfolio V2",
      category: "front-end",
      description:
        "Version 2 of my portfolio created using React.js and Bulma.",
      github: "https://github.com/HaileyThomas/react-portfolio",
      link: "https://haileythomas.github.io/react-portfolio/",
      image: portfoliov2,
    },
    {
      name: "Book Search",
      category: "full-stack",
      description: "Converted MERN application using Apollo GraphQL server.",
      github: "https://github.com/HaileyThomas/book-search",
      link: "https://morning-hamlet-46070.herokuapp.com/",
      image: booksearch,
    },
    {
      name: "Book Club",
      category: "full-stack",
      description:
        "Interactive full stack web application where users can sign up and discuss featured books. Styled with Bulma and powered by Node.js, Express.js, Sequelize and Handlebars.",
      github: "https://github.com/HaileyThomas/book-club",
      link: "https://book-club123.herokuapp.com/",
      image: bookclub,
    },
    {
      name: "Tech Blog",
      category: "full-stack",
      description:
        "Full stack tech blog web application styled with Bulma and powered with MySQL, MySQL2, Express.js, Node.js, Sequelize and Handlebars.",
      github: "https://github.com/HaileyThomas/tech-blog",
      link: "https://shrouded-anchorage-40186.herokuapp.com/",
      image: techblog,
    },
    {
      name: "Readme Generator",
      category: "back-end",
      description:
        "README file generator that creates a README.md file. Powered by Node.js.",
      github: "https://github.com/HaileyThomas/readme-generator",
      link: "https://drive.google.com/file/d/16C_DrYIsjICtYChvnUesDZo81bwmbaMh/view",
      image: readmegen,
    },
    {
      name: "Portfolio Generator",
      category: "back-end",
      description:
        "Node.js web developer portfolio generator that creates an index.html file styled in CSS.",
      github: "https://github.com/HaileyThomas/portfolio-generator",
      link: "https://github.com/HaileyThomas/portfolio-generator",
      image: portfoliogen,
    },
    {
      name: "Monster Manager",
      category: "back-end",
      description:
        "Node.js and MySQL content management system inpsired by Monsters Inc.",
      github: "https://github.com/HaileyThomas/monster-manager",
      link: "https://drive.google.com/file/d/18kDH_H9czuoDG4F4f-HjWe8AAH94hxOg/view?usp=sharing",
      image: monster,
    },
    {
      name: "Note Taker",
      category: "full-stack",
      description:
        "Server based note taking web applicaton styled with Bulma powered by Express.js and Javascript.",
      github: "https://github.com/HaileyThomas/note-taker",
      link: "https://shrouded-garden-67855.herokuapp.com/",
      image: notetaker,
    },
    {
      name: "Team Portfolio Generator",
      category: "back-end",
      description:
        "Work team portfolio generator powered by Node.js that creates an index.html file styled by Bulma.",
      github: "https://github.com/HaileyThomas/team-portfolio-generator",
      link: "https://drive.google.com/file/d/1cimk3QAWggjj07-0NqhRS9ENSxcSn6Di/view?usp=sharing",
      image: teamgen,
    },
    {
      name: "Is It A Book or Movie?",
      category: "front-end",
      description:
        "Book and movie search web application styled with Bulma and powered by 3rd party API and Javascript.",
      github: "https://github.com/HaileyThomas/book-and-movie-search",
      link: "https://arios10.github.io/book-and-movie-search/",
      image: bookormovie,
    },
    {
      name: "Weather Dashboard",
      category: "front-end",
      description:
        "Weather dashboard web application styled with Bulma and powered using server-side API and Javascript.",
      github: "https://github.com/HaileyThomas/weather-dashboard",
      link: "https://haileythomas.github.io/weather-dashboard/",
      image: weather,
    },
    {
      name: "Work Scheduler",
      category: "front-end",
      description:
        "Work day scheduler styled with Bootstrap and powered by Javascript.",
      github: "https://github.com/HaileyThomas/work-scheduler",
      link: "https://haileythomas.github.io/work-scheduler/",
      image: workday,
    },
    {
      name: "Registration Form",
      category: "front-end",
      description: "Practice CSS form.",
      github: "https://github.com/HaileyThomas/RegistrationForm",
      link: "https://haileythomas.github.io/RegistrationForm/",
      image: regform,
    },
    {
      name: "Coding Quiz",
      category: "front-end",
      description: "Timed coding quiz powered by Javascript.",
      github: "https://haileythomas.github.io/password-generator/",
      link: "https://haileythomas.github.io/coding-quiz/",
      image: codingquiz,
    },
    {
      name: "Portfolio V1",
      category: "front-end",
      description:
        "First version of my portfolio created with CSS and Javascript.",
      github: "https://github.com/HaileyThomas/portfolio",
      link: "https://haileythomas.github.io/portfolio/",
      image: portfoliov1,
    },
    {
      name: "Password Generator",
      category: "front-end",
      description: "Javascript password generator.",
      github: "https://github.com/HaileyThomas/password-generator",
      link: "https://haileythomas.github.io/password-generator/",
      image: passwordgen,
    },
    {
      name: "Robot Gladiators",
      category: "front-end",
      description: "Javascript alert fighting game.",
      github: "https://github.com/HaileyThomas/robot-gladiators",
      link: "https://haileythomas.github.io/robot-gladiators/",
      image: robotglad,
    },
    {
      name: "Dress Up Game",
      category: "front-end",
      description: "Cat party dress up game using CSS and Javascript.",
      github: "https://github.com/HaileyThomas/dressupgame",
      link: "https://haileythomas.github.io/dressupgame/",
      image: catdressup,
    },
    {
      name: "Plumbob Picker",
      category: "front-end",
      description: "Javascript randomizer for Sims 4 gameplay.",
      github: "https://github.com/HaileyThomas/plumbobpicker",
      link: "https://haileythomas.github.io/plumbobpicker/",
      image: plumbob,
    },
  ]);

  const currentProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <section className="project-list-container">
      {currentProjects.map((project, i) => (
        <Project project={project} key={project.name} />
      ))}
    </section>
  );
}

export default ProjectList;
