import "./Invitations.scss";
import { DelayedLink } from "../DelayedLink/DelayedLink";

const Invitation = () => {
  return (
    <section className="invitation">
        <h2 className="invitation__title">Let's Work Together</h2>
        <h4 className="invitation__description">
          Open to freelance, consulting, collaborative projects and work
          opportunities. Flexible with remote, async and agile workflows.
          Comfortable working across time zones and with distributed teams.
        </h4>
        <DelayedLink to="/contact" className="invitation__button">
          <span>Contact Me</span>
        </DelayedLink>
    </section>
  );
};

export default Invitation;
