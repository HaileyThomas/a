import react from "react";
import headshot from "../../assets/images/headshot.jpg";
import resumePdf from "../../assets/files/Hailey_Thomas_-_Junior_Full_Stack_Web_Developer.pdf";

import Icon from "@mdi/react";
import { mdiFileAccount } from "@mdi/js";

function About() {
  return (
    <section className="about-container">
      <h1>About Me</h1>
      <a href={resumePdf} download>
        <Icon path={mdiFileAccount} className="footer-icon" />
      </a>
      <p className="resume-text">
        <i>click above icon to download my resume.</i>
      </p>
      <div className="about-me-container">
        <div className="headshot-container">
          <img
            src={headshot}
            alt="Headshot of Hailey Thomas"
            className="headshot-img"
          />
        </div>
        <div className="about-me-text">
          <p>
            I am an aspiring junior full stack web developer who recently
            graduated from University of Arizona coding bootcamp. I currently
            own and manage a small cosmetics brand and eCommerce store and the
            unique skill set I have will made a unique and great fit to your
            team! I have a passion for seeing visions become reality and love
            building friendships with my development teams and work colleagues.
          </p>
          <p>
            In my free time I love to read (mainly Brandon Sanderson and other
            High Fantasy), play The Sims and go roller skating.
          </p>
        </div>
      </div>
      <div className="about-skills-container">
        <div className="certification-container">
          <h2>Certifications</h2>
          <div className="certification-box">
            <p>
              <b>
                <u>University of Arizona Bootcamps</u>
              </b>
            </p>
            <p>
              <b>Full Stack Web Development</b>
            </p>
            <p>2 September 2021 - 24 February 2022</p>
          </div>
        </div>
        <div className="skills-container">
          <h2>Web Development Skills</h2>
          <div className="skills-box">
            <p className="skills-text">
              MERN stack, HTML, CSS, JavaScript, Git, React, Bootstrap, Node.js,
              MongoDB, GraphQL, Atlas, OOP, Express.js, MySQL, MySQL2,
              Sequelize, NoSQL, MVC, Bulma, jQuery, Web API, Third-Party API,
              PWA, Handlebars, wire-framming, agile workflow, googling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
