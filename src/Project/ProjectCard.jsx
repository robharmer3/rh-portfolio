function ProjectCard({ project, categories }) {
  return (
    <div id="project">
      <h3>Project Title: {project.title}</h3>
      <p>Project Overview: {project.description}</p>
      <p>Project Category: {categories[project.category - 1].title}</p>
      <p>Tech Stack: </p>
      <p>{project.link}</p>
    </div>
  );
}

export default ProjectCard;
