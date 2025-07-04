import { getSkills } from "../endpoints";
import useFetchApi from "../endpoints Hook";

function SkillCatCard({ categoryTitle, categoryID, index }) {
  const { isLoading, isError, data } = useFetchApi(getSkills);
  const { skills } = data;

  if (skills) {
    return (
      <div className="project" style={{ translate: `${-100 * index}%` }}>
        <h3>{categoryTitle}</h3>
        {skills.map((skill) => {
          console.log(skill.skill_id);
          if (skill.skill_id === categoryID) {
            return skill.title;
          }
        })}
      </div>
    );
  }
}

export default SkillCatCard;
