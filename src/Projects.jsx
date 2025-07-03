import Error from "./Common/Error";
import Loading from "./Common/Loading";
import AllProjects from "./Project/ProjectAll";
import { getCategories } from "./endpoints";
import useFetchApi from "./endpoints Hook";

function Projects() {
  const { isLoading, isError, data } = useFetchApi(getCategories);
  const { categories } = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
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
