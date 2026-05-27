import "./Hero.scss";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { socialLinks, type SocialLinkId } from "../../data/socialLinks";

const socialIconById: Record<SocialLinkId, IconType> = {
  github: BsGithub,
  linkedin: BsLinkedin,
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__picture"></div>
      <h1 className="hero__title">Christopher Lassota</h1>
      <h2 className="hero__subtitle">
        Building Intuitive, User-focused applications
      </h2>
      <p className="hero__summary">
        I recently completed an intensive software development bootcamp, where I
        gained hands-on experience in full-stack development using React,
        Node.js, and SQL. My background includes diverse roles from teaching
        abroad to working in quality control labs, which shaped my adaptability,
        communication, and problem-solving skills. I'm especially drawn to
        collaborative environments where I can keep learning, contribute to
        meaningful projects, and grow as a developer.
      </p>
      <article className="hero__availability">
        <h3 className="hero__subtitle">Available for new projects</h3>
      </article>
      <article className="hero__actions">
        <div className="hero__buttons">
          <Link to="/contact" className="hero__link">
            <button className="hero__button">Get in Touch</button>
          </Link>
          <Link to="/projects" className="hero__link">
            <button className="hero__button">View My Work</button>
          </Link>
        </div>
        <div className="hero__icons">
          <IconContext.Provider value={{ color: "#5E5E5E", size: "24px" }}>
            {socialLinks.map(({ id, label, href }) => {
              const Icon = socialIconById[id];

              return (
                <a
                  key={id}
                  href={href}
                  className="hero__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hero__socials">
                    <Icon aria-hidden="true" />
                    {label}
                  </span>
                </a>
              );
            })}
          </IconContext.Provider>
        </div>
      </article>
    </section>
  );
};

export default Hero;
