import Experience from "../../Components/Experience/Experience";
import "./About.scss";
import { education } from "../../data/education";

const About = () => {
    return (
        <section className="about">
            <h1 className="about__title">About Me</h1>
            <p className="about__subtitle">
                I'm interested in the overlap between software, engineering, and practical problem-solving.
            </p>
            <p className="about__intro">
                My background started in cellular and molecular biology, where I developed strong analytical and lab skills. I later moved into software development through hands-on project work with React, TypeScript, Node.js, Express, and SQL. I'm now pursuing engineering at the University of Calgary and looking for roles where I can combine technical curiosity, communication, and hands-on problem-solving.
            </p>
            <Experience />
            <section className="education">
                    <h2 className="education__title">
                        Education
                    </h2>
                {education.map((item) => (
                    <article key={item.id} className="education__card">
                        <div className="education__card-top">
                            <p className="education__logo">
                                {item.logo}
                            </p>
                            <div className="education__information">
                                <h3 className="education__degree">
                                    {item.degree}
                                </h3>
                                <h4 className="education__institute">
                                    {item.school}
                                </h4>
                                <p className="education__date">{item.dates}</p>
                            </div>
                        </div>
                        <p className="education__description">{item.description}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default About;
