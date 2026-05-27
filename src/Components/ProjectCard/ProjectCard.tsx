import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  classNamePrefix: string;
  titleAs?: "h3" | "h4";
};

const ProjectCard = ({ project, classNamePrefix, titleAs = "h3" }: ProjectCardProps) => {
  const TitleTag = titleAs;
  return (
    <article className={`${classNamePrefix}__card`}>
      <div
        className={`${classNamePrefix}__image`}
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <TitleTag className={`${classNamePrefix}__card-title`}>{project.title}</TitleTag>
      <p className={`${classNamePrefix}__card-description`}>{project.description}</p>
      <ul className={`${classNamePrefix}__taglist`}>
        {project.tags.map((tag) => (
          <li key={`${project.id}-${tag}`} className={`${classNamePrefix}__tag`}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
