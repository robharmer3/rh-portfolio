import { useEffect, useState } from "react";
import AllProjects from "./Project/ProjectAll";
import ProjectCard from "./Project/ProjectCard";
import { getCategories } from "./endpoints";
import ProjectFilter from "./More BE Required/ProjectFilter";

function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);

  return (
    <>
      <h2>Projects</h2>
      {/* <ProjectFilter categories={categories} /> */}
      <AllProjects
        allProjects={allProjects}
        setAllProjects={setAllProjects}
        categories={categories}
      />
      {/* <ProjectCard />
      <ProjectCard />
      <ProjectCard /> */}
    </>
  );
}

export default Projects;
