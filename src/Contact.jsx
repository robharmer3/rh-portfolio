import IonIcon from "@reacticons/ionicons";
import CVButton from "./Features/CV-Button";

function Contact() {
  return (
    <>
      <h2>Contact Me</h2>
      <h3>
        If you would like to know more about me or the projects I've worked on,
        please don't hestitate to contact me.
      </h3>
      <section id="home-section">
        <p>
          <IonIcon name="call-outline"></IonIcon>
          <p>07828 125 693</p>
        </p>
        <p>
          <IonIcon name="mail-outline"></IonIcon>
          <p>rob.harmer3@gmail.com</p>
        </p>
        <p>
          <IonIcon name="location-outline"></IonIcon>
          <p>Bolton, Lancashire</p>
        </p>
        <CVButton />
      </section>
    </>
  );
}

export default Contact;
