import profilePic from "./assets/IMG-20241022-WA0002 (1).jpg";

function Home() {
  return (
    <>
      {/* <img src="" alt="" /> */}
      <img src={profilePic} alt="Me!" id="profile-pic" />
      <div id="home-page">
        <h2>Hi there 👋</h2>
        <h3>Welcome to my Software Portfolio</h3>
        <p>
          My name is Rob, and I may looking to learn new skills in the world of
          coding!
        </p>
      </div>
    </>
  );
}

export default Home;
