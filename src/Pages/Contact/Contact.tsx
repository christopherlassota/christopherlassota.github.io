import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact__title">Contact</h1>
      <p className="contact__subtitle">
        Interested in working together? Email me directly and I'll reply within
        1-2 business days.
      </p>
      <p className="contact__email">
        Email me directly at:{" "}
        <a
          className="contact__email-link"
          href="mailto:christopherlassota@outlook.com"
        >
          christopherlassota@outlook.com
        </a>
      </p>
      <p className="contact__note">
        This form is currently being connected. For now, please contact me
        directly by email.
      </p>
      <form
        className="contact__form"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="contact__field">
          Name
          <input className="contact__input" type="text" name="name" />
        </label>
        <label className="contact__field">
          Email
          <input className="contact__input" type="email" name="email" />
        </label>
        <label className="contact__field">
          Message
          <textarea
            className="contact__input contact__textarea"
            name="message"
            rows={5}
          />
        </label>
        <button className="contact__button" type="submit">
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
