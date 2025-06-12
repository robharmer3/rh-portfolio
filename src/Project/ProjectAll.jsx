import { useEffect, useState } from "react";
import { getProjects } from "../endpoints";

export default function AllProjects() {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    getProjects().then(({ projects }) => {
      console.log(projects);
      setAllProjects(projects);
    });
  }, []);

  return (
    <>
      <p>All Projects - hellofrom ProjectAll</p>
    </>
  );
}
