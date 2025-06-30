import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProject } from "../endpoints";

export default function ProjectSingle() {
  const { project_id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    getSingleProject(project_id).then(({ project }) => {
      setProject(project);
    });
  }, []);

  return (
    <section>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </section>
  );
}
