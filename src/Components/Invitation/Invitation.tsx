import "./Invitations.scss";
import { Link } from "react-router-dom";

const Invitation = () => {
  return (
    <section className="invitation">
        <h2 className="invitation__title">Let's Work Together</h2>
        <h4 className="invitation__description">
          Open to freelance, consulting, collaborative projects and work
          opportunities. Flexible with remote, async and agile workflows.
          Comfortable working across time zones and with distributed teams.
        </h4>
        <Link to="/contact" className="invitation__link">
          <button className="invitation__button">Contact Me</button>
        </Link>
    </section>
  );
};

export default Invitation;
