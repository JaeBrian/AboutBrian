import TechStacks from './TechStacks';
import Projects from './Projects';
import 'animate.css';
import NavBar from './NavBar';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="about-me">
        <div className="container">
          <div className="intro animate__animated animate__slideInLeft">
            Hello, I&apos;m Brian!
            <p className="fullstack ">Fullstack Developer</p>
          </div>

          <p id="bio">
            ABOUT ME: Fullstack developer with experience in various different
            technologies. My greatest project being Zusty, which is a Zustand
            Developer Tool made under oslabs. It helps developers using Zustand
            debug their application with time traveling, state snapshots, action
            logs, render metrics, and a component tree.
          </p>
        </div>
      </div>
      <TechStacks />
      <Projects />
    </>
  );
};

export default LandingPage;
