import { getProjects } from "../endpoints";
import useFetchApi from "../endpoints Hook";
import ProjectCard from "./ProjectCard";
import Loading from "../Common/Loading";
import Error from "../Common/Error";

export default function AllProjects({ categories }) {
  const { isLoading, isError, data } = useFetchApi(getProjects);
  const { projects } = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (projects) {
    return (
      <>
        <ul>
          {projects.map((project) => {
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
}
