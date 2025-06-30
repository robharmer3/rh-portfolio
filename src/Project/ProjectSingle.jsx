import { useParams } from "react-router";
import { getSingleProject } from "../endpoints";
import useFetchApi from "../endpoints Hook";
import Loading from "../Common/Loading";

export default function ProjectSingle() {
  const { project_id } = useParams();

  const { isLoading, isError, data } = useFetchApi(
    getSingleProject,
    project_id
  );
  const { project } = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (project) {
    return (
      <section>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </section>
    );
  }
}
