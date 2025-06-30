import CVButton from "./Features/CV-Button";

function About() {
  return (
    <>
      <section id="home-section">
        <h3>About me...</h3>
        <p>
          I am an aspiring software develop, who has recently graduate from
          Northcoders' JavaScript Bootcamp, as part of their Janaury 2025
          Cohort.
        </p>
        <p>
          Previously I was a Project Engineering with a degree in Mechanical
          Engineering from the University of Bolton.
        </p>
        <p>
          As an mechanical engineer, I have worked in various industries and
          dealt with my different producting includeing: expansion joint,
          furniture, motorcylces, and commerical trucks.
        </p>
      </section>
      <section id="home-section">
        <h3>Why coding..?</h3>
        <p>
          I choose to change my career and become a software developer
          because....
        </p>
      </section>

      <section id="home-section">
        <h3>Hobbies...</h3>
        <ul>
          <li>Coding 💻 - My new passion</li>
          <li>
            Hockey 🏑 - My other passtime that I've been doing for 12(ish) years
          </li>
          <li>Cats 😸 - I may be slightly cat mad!</li>
        </ul>
      </section>
      <CVButton />
    </>
  );
}

export default About;
