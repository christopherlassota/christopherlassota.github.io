import "./Header.scss";
import { BsList } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DelayedLink } from "../DelayedLink/DelayedLink";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <Link className="header__logo" to="/" onClick={closeMenu}>
        <p className="header__logo-text">CL</p>
      </Link>
      <nav className="header__navigation">
        <button
          className="header__waffle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <IconContext.Provider value={{ size: "24px" }}>
            <BsList />
          </IconContext.Provider>
        </button>
        <ul
          id="primary-navigation"
          className={`header__nav-list${
            isMenuOpen ? " header__nav-list--open" : ""
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                className="header__nav-link"
                to={link.to}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <DelayedLink
        className="header__contact"
        onNavigateStart={closeMenu}
        to="/contact"
      >
        <IconContext.Provider value={{ size:"24px"}}>
            <BsEnvelope />
        </IconContext.Provider>
        <p className="header__contact-text">
            Let's Talk
        </p>
      </DelayedLink>
    </header>
  );
};

export default Header;
