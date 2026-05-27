import "./Projects.scss";
import { projects } from "../../data/projects";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__subtitle">
        Selected work that highlights my approach to design, engineering, and
        collaboration.
      </p>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            classNamePrefix="projects"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
