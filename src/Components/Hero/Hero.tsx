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
      <h2 className="hero__subtitle">Software Developer & Engineering Student</h2>
      <p className="hero__summary">
        I build practical web applications with React, TypeScript, Node.js, and
        SQL. My background in science, technical documentation, and teaching has
        shaped how I approach problem-solving: clearly, carefully, and with the
        user in mind. I'm currently transitioning into engineering and looking
        for opportunities where I can contribute, learn quickly, and solve real
        technical problems.
      </p>
      <article className="hero__availability">
        <h3 className="hero__subtitle">
          Open to software, technical, and engineering-adjacent opportunities
        </h3>
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
