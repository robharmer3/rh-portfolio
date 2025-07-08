import { getSkills } from "../endpoints";
import useFetchApi from "../endpoints Hook";
import SkillCard from "./SkillCard";

function SkillCatCard({ categoryTitle, categoryID, index }) {
  return (
    <div className="project" style={{ translate: `${-100 * index}%` }}>
      <h3>{categoryTitle}</h3>
      <SkillCard categoryID={categoryID} />
    </div>
  );
}

export default SkillCatCard;
