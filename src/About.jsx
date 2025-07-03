import CVButton from "./Features/CV-Button";

function About() {
  return (
    <>
      <section id="home-section">
        <h3>About me...</h3>
        <p>
          I am an aspiring software developer, who has recently graduate from
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
          I have also had a interest in how things work and with the latest
          technologies. This originally lead me into mechanical engieering, but
          due to setbacks like redundancies and never filling fufilled I felt
          the time was right to purse alternatives. After a friend introduced me
          to the wonderful world of coding, I found my new passion.
        </p>
        <p>
          After dabberling on CodeWars and being made redundate (again), I knew
          I had to take the plunge and complete Northcoders JavaScript bootcamp.
        </p>
        <p>
          I am now looking to continue my exciting journey and land my first
          role within the tech industry!
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
