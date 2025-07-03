import { getSkills } from "./endpoints";
import useFetchApi from "./endpoints Hook";

export default function Skills() {
  const { isLoading, isError, data } = useFetchApi(getSkills);
  const { skills } = data;
  console.log(skills);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (isError) {
    return <p>ERROR!</p>;
  }

  if (skills) {
    return (
      <>
        <h2>Skills</h2>
        <h3>Languages</h3>
        <ul>
          {skills.map((skill) => {
            if (skill.category === 1) {
              return <li>{skill.title}</li>;
            }
          })}
        </ul>
        <h3>Testing</h3>
        <ul>
          {skills.map((skill) => {
            if (skill.category === 2) {
              return <li>{skill.title}</li>;
            }
          })}
        </ul>
        <h3>Back-End</h3>
        <ul>
          {skills.map((skill) => {
            if (skill.category === 3) {
              return <li>{skill.title}</li>;
            }
          })}
        </ul>
        <h3>Front-End</h3>
        <ul>
          {skills.map((skill) => {
            if (skill.category === 4) {
              return <li>{skill.title}</li>;
            }
          })}
        </ul>
        <h3>Hosting</h3>
        <ul>
          {skills.map((skill) => {
            if (skill.category === 5) {
              return <li>{skill.title}</li>;
            }
          })}
        </ul>
        <h3>Techniques</h3>
        <ul>
          {skills.map((skill) => {
            if (skill.category === 6) {
              return <li>{skill.title}</li>;
            }
          })}
        </ul>
        <h3>Engineering</h3>
        <ul>
          {skills.map((skill) => {
            if (skill.category === 7) {
              return <li>{skill.title}</li>;
            }
          })}
        </ul>
        <h3>Personal</h3>
        <ul>
          {skills.map((skill) => {
            if (skill.category === 8) {
              return <li>{skill.title}</li>;
            }
          })}
        </ul>
      </>
    );
  }
}
