import { useEffect, useState } from "react";
import AllProjects from "./Project/ProjectAll";
import ProjectCard from "./Project/ProjectCard";
import { getCategories } from "./endpoints";
import ProjectFilter from "./More BE Required/ProjectFilter";
import useFetchApi from "./endpoints Hook";

function Projects() {
  const [allProjects, setAllProjects] = useState([]);

  const { isLoading, isError, data } = useFetchApi(getCategories);
  const { categories } = data;

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (isError) {
    return <p>ERROR!</p>;
  }

  if (categories) {
    return (
      <>
        <h2>Projects</h2>
        <AllProjects categories={categories} />
      </>
    );
  }
}

export default Projects;
