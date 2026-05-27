import "./FeaturedProjects.scss";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
  const featured = projects.filter((project) => project.featured);
  return (
    <section className="featuredprojects">
      <h2 className="featuredprojects__title">Featured Projects</h2>
      <h3 className="featuredprojects__subtitle">
        Selected project work focused on practical interfaces, responsive
        layouts, and clear data flows.
      </h3>
      <div className="featuredprojects__card-container">
        {featured.map((project) => (
          <article key={project.id} className="featuredprojects__card">
            <div
              className="featuredprojects__image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <h4 className="featuredprojects__card-title">{project.title}</h4>
            <p className="featuredprojects__card-description">
              {project.description}
            </p>
            <ul className="featuredprojects__taglist">
              {project.tags.map((tag) => (
                <li key={`${project.id}-${tag}`} className="featuredprojects__tag">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
