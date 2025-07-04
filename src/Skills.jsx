import Error from "./Common/Error";
import Loading from "./Common/Loading";
import { getSkillsCategories } from "./endpoints";
import useFetchApi from "./endpoints Hook";

export default function Skills() {
  const { isLoading, isError, data } = useFetchApi(getSkillsCategories);
  const { skillCategories } = data;

  console.log(skillCategories);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (skillCategories) {
    return (
      <>
        <h2>Skills</h2>
      </>
    );
  }
}
