import { useState } from "react";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import { getSkills } from "../endpoints";
import useFetchApi from "../endpoints Hook";
import SkillCard from "./SkillsCard";

export default function AllSkills() {
  const { isLoading, isError, data } = useFetchApi(getSkills);
  const { skills } = data;

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

  if (skills) {
    return (
      <>
        <h2>Skills</h2>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <div style={{ width: "100%", height: "100%", display: "block" }}>
            {skills.map((skill) => {
              return <SkillCard key={skill.skill_id} skill={skill} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
