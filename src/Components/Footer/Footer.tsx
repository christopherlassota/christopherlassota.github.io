import "./Footer.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { socialLinks, type SocialLinkId } from "../../data/socialLinks";

const socialIconById: Record<SocialLinkId, IconType> = {
  github: BsGithub,
  linkedin: BsLinkedin,
};

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__left">
        <h3 className="footer__title">Christopher Lassota</h3>
        <p className="footer__description">
          Full-stack web developer passionate about creating exceptional web
          experiences. Specializing in react.js and modern web technologies
        </p>
        <ul className="footer__icon-list">
          <IconContext.Provider value={{ color: "#5E5E5E", size: "24px" }}>
            {socialLinks.map(({ id, label, href }) => {
              const Icon = socialIconById[id];

              return (
                <li key={id} className="footer__icon">
                  <a
                    href={href}
                    className="footer__icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </IconContext.Provider>
        </ul>
      </section>
      <section className="footer__right">
        <h4 className="footer__title">Quick Links</h4>
        <ul className="footer__quicklink-list">
          <li>
            <Link className="footer__quicklink" to="/">Home</Link>
          </li>
          <li>
            <Link className="footer__quicklink" to="/about">About</Link>
          </li>
          <li>
            <Link className="footer__quicklink" to="/projects">Projects</Link>
          </li>
          <li>
            <Link className="footer__quicklink" to="/contact">Connect</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
