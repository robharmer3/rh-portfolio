import IonIcon from "@reacticons/ionicons";
import CVButton from "./Features/CV-Button";

function Contact() {
  return (
    <>
      <h2>Contact Me</h2>
      <IonIcon name="call-outline"></IonIcon>
      <p>07828 125 693</p>
      <IonIcon name="mail-outline"></IonIcon>
      <p>rob.harmer3@gmail.com</p>
      <CVButton />
    </>
  );
}

export default Contact;
