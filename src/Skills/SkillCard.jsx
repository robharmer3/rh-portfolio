import Error from "../Common/Error";
import Loading from "../Common/Loading";
import { getSkills } from "../endpoints";
import useFetchApi from "../endpoints Hook";

export default function SkillCard({ categoryID }) {
  const { isLoading, isError, data } = useFetchApi(getSkills);
  const { skills } = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (skills) {
    const neededSkills = skills.map((skill) => {
      if (skill.category === categoryID) {
        return skill.title;
      }
    });

    return (
      <>
        {neededSkills.map((skill) => {
          if (skill) {
            return <p key={skill}>{skill}</p>;
          }
        })}
      </>
    );
  }
}
