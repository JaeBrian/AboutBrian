import TechStacks from './TechStacks';
import Projects from './Projects';
import 'animate.css';
import NavBar from './NavBar';
import './aboutme.scss';
import './index.scss';
import linkedin from './assets/linkedin.png';
import git from './assets/git.png';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div class="w-90 h-screen flex items-center justify-center p-20">
        <div class="grid grid-cols-5 grid-rows-5 gap-4  w-full h-full">
          <div class="flex-center grid-card items-start rounded-radius p-5 col-span-2 row-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-1">
            PICTURE OF ME HERE
          </div>
          <div class="flex-center items-start grid-card rounded-radius col-span-2 row-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-2 ">
            <div className="text-lg">
              <p className="fullstack">Fullstack Developer</p>
              Hi there! I'm Brian, I am a software engineer who loves creating,
              innovating, and buildling things that other people enjoy. I love
              learning new technologies and thats what I enjoy the most about
              software engineering, the learning never stops. If I am not
              coding, you can catch me playing some auto chess games, watching
              Primeagen, or watching Ratatouille.
            </div>
          </div>

          <div class="flex-center  grid-card rounded-radius row-span-4 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-4">
            LIST OF PROJECTS
          </div>

          <div class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-5">
            <img class="object-contain w-10 h-10" src={linkedin} />
          </div>
          <div class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-5">
            <img class="object-contain w-12 h-12" src={git}></img>
          </div>
          <div class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-5">
            <div class="text-2xl font-bold">RESUME</div>
          </div>
          <div class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-5">
            <div class="text-2xl font-bold">ZUSTY</div>
          </div>

          <div class="flex-center  grid-card rounded-radius col-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-5">
            <div class="text-xl">
              Specialized in Javascript, React, Node, Express, Redux
            </div>
          </div>
          <div class="flex-center  grid-card rounded-radius row-span-2 col-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-6">
            PROBABLY PROJECT HERE
          </div>

          <div class="flex-center  grid-card rounded-radius col-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-8">
            Content 8
          </div>
          <div class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-8">
            OPEN SOURCE
          </div>
        </div>
      </div>
      <TechStacks className="whiteback" />
    </>
  );
};

export default LandingPage;

{
  /* <div className="clickables"></div>
<div className="about-me">
  <div className="container >
    <div className="intro animate__animated animate__backInDown">
      Hello, I&apos;m Brian!
      <p className="fullstack ">Fullstack Developer /p>
    </div>

    <p id="bio" className="animate__animated animate__backInLeft">
      I am a software engineer who loves creating, innovating, and
      buildling things that other people enjoy. Building great things as
      a software engineer is like sharing great food, you get to watch
      it be enjoyed! I love learning new technologies and thats what I
      enjoy the most about software engineer ng, the learning never       stops.
    </p>
  </div>
</div> */
}
