import { Link } from 'react-scroll';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="button-container">
      <div className="dot-container">
        <div className="dot"></div>
        <span>Online</span>
      </div>
      <Link
        to="main"
        smooth={true}
        duration={500}
        className="button"
        spy={true}
        exact="true"
        offset={-200}
      >
        ABOUT
      </Link>
      <Link
        to="project"
        smooth={true}
        duration={500}
        className="button"
        spy={true}
        exact="true"
        offset={-100}
      >
        PROJECTS
      </Link>
      <a
        id="linkedin"
        className="buttons"
        href="https://www.linkedin.com/in/brian-jaekook-lee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LINKEDIN
      </a>
      <a
        id="chromebutton"
        className="buttons"
        href="https://chromewebstore.google.com/search/zusty"
        target="_blank"
        rel="noopener noreferrer"
      >
        CHROME STORE
      </a>

      <a
        className="buttons"
        href="https://github.com/JaeBrian"
        target="_blank"
        rel="noopener noreferrer"
      >
        GITHUB
      </a>
    </div>
  );
};

export default NavBar;
