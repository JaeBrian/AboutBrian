import TechStacks from './TechStacks';
import Projects from './Projects';
import 'animate.css';
import NavBar from './NavBar';
import './aboutme.scss';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="about-me">
        <div className="container">
          <div
            className="sun animate__animated animate__bounceInDown"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="mountains animate__animated animate__bounceInRight"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="mountains1  animate__animated  animate__bounceInLeft"
            style={{ animationDelay: '0.7s' }}
          ></div>
          <div
            className="mountains2  animate__animated animate__bounceInLeft"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="mountains3  animate__animated animate__bounceIn"
            style={{ animationDelay: '1.2s' }}
          ></div>
          <div
            className="intro animate__animated animate__backInDown"
            style={{ animationDelay: '1.5s' }}
          >
            Hello, I&apos;m Brian!
            <p className="fullstack ">Fullstack Developer</p>
          </div>

          <p
            id="bio"
            className="animate__animated animate__backInLeft"
            style={{ animationDelay: '1.8s' }}
          >
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
