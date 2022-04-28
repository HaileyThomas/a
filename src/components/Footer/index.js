import react from "react";
import resumePdf from "../../assets/files/Hailey_Thomas_-_Junior_Full_Stack_Web_Developer.pdf";

import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiFileAccount } from "@mdi/js";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <section className="footer-container">
      <div className="footer-icons">
        <a
          href="https://github.com/HaileyThomas"
          target="blank"
          rel="noopener noreferrer"
        >
          <Icon path={mdiGithub} className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/haileyraethomas"
          target="blank"
          rel="noopener noreferrer"
        >
          <Icon path={mdiLinkedin} className="footer-icon" />
        </a>
        <a href={resumePdf} download>
          <Icon path={mdiFileAccount} className="footer-icon" />
        </a>
      </div>
      <div className="footer-text">
        <p>
          &copy; Hailey Thomas ({currentYear}) created using React.js{" "}
          <a
            href="https://github.com/HaileyThomas/portfolio-v3"
            target="blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            click here
          </a>{" "}
          to view the source code.
        </p>
      </div>
    </section>
  );
}

export default Footer;
