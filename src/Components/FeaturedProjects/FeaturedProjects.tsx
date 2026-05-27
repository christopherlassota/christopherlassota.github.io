import "./FeaturedProjects.scss";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

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
          <ProjectCard
            key={project.id}
            project={project}
            classNamePrefix="featuredprojects"
            titleAs="h4"
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
