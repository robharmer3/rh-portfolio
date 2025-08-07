import { Link } from "react-router";

function ProjectCard({ project, categories, index }) {
  console.log(typeof project.avatar_url);
  return (
    <div className="project" style={{ translate: `${-100 * index}%` }}>
      <h3>
        <Link to={`/projects/${project.project_id}`}>{project.title}</Link>
      </h3>
      <p>Project Overview: {project.description}</p>
      <p>Project Category: {categories[project.category - 1].title}</p>
      <p>Tech Stack: </p>
      <p>{project.link}</p>
      <img
        src="https://en.wikipedia.org/wiki/Tiger#/media/File:Walking_tiger_female.jpg"
        alt=""
      />
    </div>
  );
}

export default ProjectCard;
