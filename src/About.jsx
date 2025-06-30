import CVButton from "./Features/CV-Button";

function About() {
  return (
    <>
      <h2>About</h2>
      <p>Here is a little more about me!</p>
      <section id="home-section">
        <h3>About me...👋</h3>
        <ul>
          <li>
            💻 Aspiring Software Developer. Back-End (JavaScript, Node.js).
            Front-End (React, React Native, CSS)
          </li>
          <li>🎓 Northcoder Graduate. Janurary 2025 Cohort.</li>
          <li>
            📜 Mechanical Engineering Degree from the University of Bolton (now
            known as the University of Greater Manchester).
          </li>
          <li>
            💏 Husband to my beautiful wife. Father to my amazing daugther.
          </li>
          😸 Slightly cat mad! I have 3!!!
        </ul>
      </section>
      <section id="home-section">
        <h3>Coding...🎮</h3>
        <p>Current working on:</p>
        <ul>
          <li>Portofilio site</li>
          <li>Top-trump style game (witty name still TBD)</li>
        </ul>
      </section>
      <section id="home-section">
        <h3>Hobbies...✨</h3>
        <ul>
          <li>Coding 💻</li>
          <li>Hockey 🏑</li>
          <li>Food 🥞</li>
          <li>Cats 😸</li>
        </ul>
      </section>
      <CVButton />
    </>
  );
}

export default About;
