import { useState } from "react";
import { getProjects } from "../endpoints";
import useFetchApi from "../endpoints Hook";
import ProjectCard from "./ProjectCard";
import Loading from "../Common/Loading";
import Error from "../Common/Error";

export default function AllProjects({ categories }) {
  const { isLoading, isError, data } = useFetchApi(getProjects);
  const { projects } = data;

  const [index, setIndex] = useState(0);

  function setNext() {
    setIndex((index) => {
      if (index === projects.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  }

  function setPrev() {
    setIndex((index) => {
      if (index === 0) {
        return projects.length - 1;
      } else {
        return index - 1;
      }
    });
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (projects) {
    return (
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.project_id}
                project={project}
                categories={categories}
                index={index}
              />
            );
          })}
        </div>
        <button onClick={setPrev} style={{ left: 0 }}>
          Prev
        </button>
        <button onClick={setNext} style={{ right: 0 }}>
          Next
        </button>
      </div>
    );
  }
}
