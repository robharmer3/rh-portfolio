import IonIcon from "@reacticons/ionicons";
import CVButton from "./Features/CV-Button";

function Contact() {
  return (
    <>
      <h2>Contact Me</h2>
      <p>
        <IonIcon name="call-outline"></IonIcon>
        07828 125 693
      </p>
      <p>
        <IonIcon name="mail-outline"></IonIcon>
        rob.harmer3@gmail.com
      </p>
      <p>
        <IonIcon name="location-outline"></IonIcon>
        Bolton, Lancashire
      </p>
      <CVButton />
    </>
  );
}

export default Contact;
