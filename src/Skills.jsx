import { useState } from "react";
import Error from "./Common/Error";
import Loading from "./Common/Loading";
import { getSkills } from "./endpoints";
import useFetchApi from "./endpoints Hook";

export default function Skills() {
  const { isLoading, isError, data } = useFetchApi(getSkills);
  const { skills } = data;

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
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div className="skills">
              <h3>Languages</h3>
              <ul>
                {skills.map((skill) => {
                  if (skill.category === 1) {
                    return <li key={skill.skill_id}>{skill.title}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div className="skills">
              <h3>Testing</h3>
              <ul>
                {skills.map((skill) => {
                  if (skill.category === 2) {
                    return <li key={skill.skill_id}>{skill.title}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div className="skills">
              <h3>Back-End</h3>
              <ul>
                {skills.map((skill) => {
                  if (skill.category === 3) {
                    return <li key={skill.skill_id}>{skill.title}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div className="skills">
              <h3>Front-End</h3>
              <ul>
                {skills.map((skill) => {
                  if (skill.category === 4) {
                    return <li key={skill.skill_id}>{skill.title}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div className="skills">
              <h3>Hosting</h3>
              <ul>
                {skills.map((skill) => {
                  if (skill.category === 5) {
                    return <li key={skill.skill_id}>{skill.title}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div className="skills">
              <h3>Techniques</h3>
              <ul>
                {skills.map((skill) => {
                  if (skill.category === 6) {
                    return <li key={skill.skill_id}>{skill.title}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div className="skills">
              <h3>Engineering</h3>
              <ul>
                {skills.map((skill) => {
                  if (skill.category === 7) {
                    return <li key={skill.skill_id}>{skill.title}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div className="skills">
              <h3>Personal</h3>
              <ul className="skills">
                {skills.map((skill) => {
                  if (skill.category === 8) {
                    return <li key={skill.skill_id}>{skill.title}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
