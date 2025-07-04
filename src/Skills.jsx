import { useState } from "react";
import Error from "./Common/Error";
import Loading from "./Common/Loading";
import { getSkillsCategories } from "./endpoints";
import useFetchApi from "./endpoints Hook";
import SkillCatCard from "./Skills/SkillsCatCard";

export default function Skills() {
  const { isLoading, isError, data } = useFetchApi(getSkillsCategories);
  const { skillCategories } = data;

  const [index, setIndex] = useState(0);

  function setNext() {
    setIndex((index) => {
      if (index === skillCategories.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  }

  function setPrev() {
    setIndex((index) => {
      if (index === 0) {
        return skillCategories.length - 1;
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

  if (skillCategories) {
    return (
      <>
        <h2>Skills</h2>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              overflow: "hidden",
            }}
          >
            {skillCategories.map((category) => {
              return (
                <SkillCatCard
                  key={category.skill_category_id}
                  categoryTitle={category.title}
                  categoryID={category.skill_category_id}
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
      </>
    );
  }
}
