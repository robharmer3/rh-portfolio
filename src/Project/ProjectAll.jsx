import { useEffect, useState } from "react";
import { getProjects } from "../endpoints";
import ProjectCard from "./ProjectCard";

export default function AllProjects({
  allProjects,
  setAllProjects,
  categories,
}) {
  useEffect(() => {
    getProjects().then(({ projects }) => {
      setAllProjects(projects);
    });
  }, []);

  return (
    <>
      <ul>
        {allProjects.map((project) => {
          return (
            <ProjectCard
              key={project.project_id}
              project={project}
              categories={categories}
            />
          );
        })}
      </ul>
    </>
  );
}
