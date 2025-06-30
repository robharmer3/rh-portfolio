import { Link } from "react-router";

const linkedin = "https://www.linkedin.com/in/robert-harmer-332b4011a/";
const gitHub = "https://github.com/robharmer3";

function Footer() {
  return (
    <>
      {/* <p>Follow me on:</p> */}
      <ul>
        <li>
          <Link to="/contacts">Contact Me</Link>
        </li>
        <li>
          <Link to={linkedin}>LinkedIn</Link>
        </li>
        <li>
          <Link to={gitHub}>GitHub</Link>
        </li>
      </ul>
    </>
  );
}

export default Footer;
